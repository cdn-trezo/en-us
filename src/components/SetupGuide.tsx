import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowLeft, ArrowRight, Package, Usb, Smartphone, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Package className="h-10 w-10 text-dark-green" />,
    title: "Unbox Your Device",
    description: "Carefully unpack your Trezor device and verify all security seals are intact. Check that you've received all components including the USB cable and recovery seed cards.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Usb className="h-10 w-10 text-dark-green" />,
    title: "Connect to Computer",
    description: "Connect your Trezor to your computer using the provided USB cable. The device will power on automatically and display the welcome screen.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-dark-green" />,
    title: "Install Trezor Suite",
    description: "Download and install Trezor Suite from the official website. This application will guide you through the setup process and serve as your interface for managing cryptocurrencies.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: <Shield className="h-10 w-10 text-dark-green" />,
    title: "Create Your Wallet",
    description: "Follow the on-screen instructions to create a new wallet. Write down your recovery seed on the provided cards and store them in a secure location. This seed is your ultimate backup.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const SetupGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="setup" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple Setup</span> Process
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Getting started with your Trezor device is straightforward. Follow these steps to secure your digital assets in minutes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-50 rounded-lg mr-4">
                  {steps[currentStep].icon}
                </div>
                <h3 className="text-2xl font-bold">{steps[currentStep].title}</h3>
              </div>
              
              <p className="text-gray-700 mb-8">
                {steps[currentStep].description}
              </p>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={prevStep} 
                  disabled={currentStep === 0}
                  className={`flex items-center ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-dark-green hover:text-light-green'}`}
                >
                  <ArrowLeft className="h-5 w-5 mr-2" /> Previous
                </button>
                
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`h-3 w-3 rounded-full ${currentStep === index ? 'bg-dark-green' : 'bg-gray-300'}`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextStep} 
                  disabled={currentStep === steps.length - 1}
                  className={`flex items-center ${currentStep === steps.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-dark-green hover:text-light-green'}`}
                >
                  Next <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 bg-accent-green rounded-full opacity-20 filter blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5
                }}
              />
              
              <img 
                src={steps[currentStep].image} 
                alt={steps[currentStep].title} 
                className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-video"
              />
              
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="font-medium text-dark-green">
                  Step {currentStep + 1} of {steps.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetupGuide;