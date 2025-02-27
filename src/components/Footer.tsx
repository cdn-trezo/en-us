import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Twitter, Facebook, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Shield className="h-8 w-8 text-accent-green mr-2" />
              <span className="text-xl font-bold text-white">Trezor.io/start</span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Your gateway to secure cryptocurrency management. Protect your digital assets with military-grade security.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-400 hover:text-white"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Security', 'Setup', 'Support'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {['User Manual', 'FAQ', 'Blog', 'Support Center', 'Contact Us'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#"
                    className="text-gray-400 hover:text-white flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and security tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent-green w-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-green text-white px-4 py-2 rounded-r-lg"
              >
                <Mail size={20} />
              </motion.button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Trezor.io/start. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;