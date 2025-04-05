import { motion } from 'framer-motion';
import { useState } from 'react';

const photos = [
  { id: 1, src: '/profile1.jpeg', alt: 'Jhersonn Cayao professional portrait' },
  { id: 2, src: '/profile2.jpeg', alt: 'Jhersonn Cayao speaking at conference' },
  { id: 3, src: '/profile3.jpeg', alt: 'Jhersonn Cayao team collaboration' },
  { id: 4, src: '/profile4.jpeg', alt: 'Jhersonn Cayao coding session' }
];

export default function PhotoGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Main profile photo with floating thumbnails */}
      <div className="relative w-64 h-64">
        <motion.img
          src={photos[0].src}
          alt={photos[0].alt}
          className="w-full h-full object-cover rounded-xl border-4 border-dark z-10 relative"
          whileHover={{ scale: 1.03 }}
        />
        
        {/* Floating thumbnails */}
        {photos.slice(1).map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`absolute w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 border-white shadow-lg ${
              index === 0 ? '-bottom-2 -left-2' : 
              index === 1 ? '-top-2 -right-2' : 
              index === 2 ? '-bottom-2 -right-2' : ''
            }`}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, zIndex: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            onClick={() => setSelectedId(photo.id)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="w-64 h-64 bg-gradient-to-br from-primary to-cyan-400 rounded-xl absolute -z-10 top-4 left-4"></div>

      {/* Expanded view modal */}
      {selectedId && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedId(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos.find(p => p.id === selectedId)?.src || ''} 
              alt={photos.find(p => p.id === selectedId)?.alt || ''}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedId(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex gap-4 mt-4 justify-center">
              {photos.map(photo => (
                <motion.div
                  key={photo.id}
                  className={`w-16 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    photo.id === selectedId ? 'border-primary' : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedId(photo.id)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}