import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bulletPoints = [
    "Isolated secure element chip protects against physical tampering",
    "Open-source firmware allows community verification of security",
    "Deterministic wallet generation ensures reproducible security",
    "Encrypted communication channels prevent man-in-the-middle attacks",
    "Automatic firmware verification prevents malicious code execution",
    "Secure boot ensures only authorized firmware runs on your device"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 bg-light-green rounded-full opacity-20 filter blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5
                }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Trezor security visualization" 
                className="rounded-2xl shadow-xl relative z-10"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-dark-green text-white p-4 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <ShieldCheck className="h-6 w-6 mb-2" />
                <p className="text-sm font-medium">Military-grade encryption</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Uncompromising <span className="gradient-text">Security</span> Standards
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              In the evolving landscape of digital threats, Trezor stands as your fortress against potential vulnerabilities. 
              Our hardware wallets implement multiple layers of security to ensure your cryptocurrencies remain protected 
              at all times, even if your computer is compromised.
            </p>
            
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">
                  <span className="font-semibold block mb-1">Security Warning:</span>
                  Never share your recovery seed with anyone. Legitimate Trezor representatives will never ask for your seed phrase, PIN, or passwords.
                </p>
              </div>
            </div>
            
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {bulletPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-dark-green mr-3 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;