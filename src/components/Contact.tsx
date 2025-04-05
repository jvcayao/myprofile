import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import { Message } from '../types';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<Message>({ text: '', type: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.current) return;

    emailjs.sendForm(
      'service_cc8aeab', 
      'template_ca1i1g7', 
      form.current, 
      'cohvG-OCVeH3KaXEr'
    )
    .then((result) => {
      setMessage({ text: 'Message sent successfully!', type: 'success' });
      form.current?.reset();
    }, (error) => {
      setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:jvcayao@outlook.com" className="text-slate-400 hover:text-primary transition-colors">
                      jvcayao@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+639192353908" className="text-slate-400 hover:text-primary transition-colors">
                      (+639) 19-235-3908
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-slate-400">Marikina City, Philippines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary mr-4 mt-1">
                    <FiLinkedin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/jvcayao/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      linkedin.com/in/jvcayao
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="user_email"
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-primary rounded-lg font-medium hover:bg-cyan-500 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {message.text && (
                  <div className={`mt-4 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {message.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}