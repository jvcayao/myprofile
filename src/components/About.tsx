import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
// Import images directly
import profile1 from '../assets/images/profile1.jpeg';
import profile2 from '../assets/images/profile2.jpeg';
import profile3 from '../assets/images/profile3.jpeg';
import profile4 from '../assets/images/profile4.jpeg';

const profilePhotos = [
  { id: 1, src: profile1, alt: 'Profile1' },
  { id: 2, src: profile2, alt: 'Profile2' },
  { id: 3, src: profile3, alt: 'Profile3' },
  { id: 4, src: profile4, alt: 'Profile4' }
];


// Animation variants
const photoVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1]
        }
    },
    exit: (direction: number) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1]
        }
    })
};

const thumbnailVariants = {
    hover: {
        scale: 1.1,
        zIndex: 10,
        transition: { duration: 0.2 }
    },
    tap: {
        scale: 0.95
    }
};

export default function About() {
    const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

    const navigatePhotos = (newIndex: number) => {
        const newDirection = newIndex > activeIndex ? 1 : -1;
        setActiveIndex([newIndex, newDirection]);
    };

    const nextPhoto = () => {
        navigatePhotos((activeIndex + 1) % profilePhotos.length);
    };

    const prevPhoto = () => {
        navigatePhotos((activeIndex - 1 + profilePhotos.length) % profilePhotos.length);
    };

    // Auto-rotate photos every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextPhoto, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass-effect p-8 rounded-xl max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="mb-4">
                                I am a seasoned Application Developer with over 11 years of experience in delivering scalable web solutions using ReactJS, Laravel PHP Frameworks, and Ubuntu.
                            </p>
                            <p className="mb-4">
                                Skilled in both front-end and back-end development with server administration expertise, I have successfully led teams and developed critical software solutions that improved operational efficiency by up to 30%.
                            </p>
                            <p className="mb-4">
                                Currently based in Singapore, I'm looking to leverage my diverse skill set to contribute to innovative projects at forward-thinking companies.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {['ReactJS', 'Laravel', 'PHP', 'JavaScript', 'TypeScript', 'MySQL', 'Ubuntu', 'Docker', 'Kubernetes'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="relative w-64 h-64 mb-4 overflow-hidden">
                                <div className="w-64 h-64 bg-gradient-to-br from-primary to-cyan-400 rounded-xl absolute -z-10 top-4 left-4"></div>

                                {/* Animated photo container */}
                                <AnimatePresence custom={direction} initial={false}>
                                    <motion.div
                                        key={activeIndex}
                                        custom={direction}
                                        variants={photoVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute w-full h-full"
                                    >
                                        <img
                                            src={profilePhotos[activeIndex].src}
                                            alt={profilePhotos[activeIndex].alt}
                                            className="w-full h-full object-cover rounded-xl border-4 border-dark"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation arrows */}
                                <button
                                    onClick={prevPhoto}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-primary transition-all"
                                    aria-label="Previous photo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextPhoto}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-primary transition-all"
                                    aria-label="Next photo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Thumbnail navigation */}
                            <div className="grid grid-cols-4 gap-2 w-64">
                                {profilePhotos.map((photo, index) => (
                                    <motion.button
                                        key={photo.id}
                                        variants={thumbnailVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={() => navigatePhotos(index)}
                                        className={`relative h-16 rounded-lg overflow-hidden transition-all ${index === activeIndex ? 'ring-2 ring-primary' : 'opacity-80 hover:opacity-100'
                                            }`}
                                    >
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        {index === activeIndex && (
                                            <motion.div
                                                className="absolute inset-0 bg-primary/20"
                                                layoutId="activePhotoIndicator"
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Photo counter */}
                            <div className="mt-2 text-sm text-slate-400">
                                {activeIndex + 1} / {profilePhotos.length}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}