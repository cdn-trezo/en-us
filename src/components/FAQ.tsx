import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is a hardware wallet and why do I need one?",
    answer: "A hardware wallet is a physical device designed to securely store the private keys to your cryptocurrency. Unlike software wallets, hardware wallets keep your keys offline and protected from online threats like malware and phishing attacks. If you own any significant amount of cryptocurrency, a hardware wallet is essential for protecting your investment from theft."
  },
  {
    question: "How does Trezor compare to other hardware wallets?",
    answer: "Trezor was the world's first cryptocurrency hardware wallet and remains an industry leader. What sets Trezor apart is its combination of security, ease of use, and open-source transparency. Unlike some competitors, Trezor's firmware is fully open-source, allowing security researchers to verify its integrity. Trezor also offers a user-friendly interface and supports a wide range of cryptocurrencies."
  },
  {
    question: "What happens if I lose my Trezor device?",
    answer: "If you lose your Trezor device, your funds remain safe as long as no one has access to both your device and PIN. You can recover all your cryptocurrencies by using your recovery seed (the 12-24 word backup phrase you wrote down during setup) with a new Trezor device or any compatible wallet that supports the same recovery standards."
  },
  {
    question: "Which cryptocurrencies does Trezor support?",
    answer: "Trezor supports thousands of cryptocurrencies, including major ones like Bitcoin, Ethereum, Litecoin, and Ripple, as well as all ERC-20 tokens. The list of supported cryptocurrencies is constantly expanding with firmware updates. You can check the full list of supported coins on the official Trezor website."
  },
  {
    question: "Is Trezor difficult to set up for beginners?",
    answer: "No, Trezor is designed with beginners in mind. The setup process is guided step-by-step through the Trezor Suite application, with clear instructions and visual aids. Most users can complete the initial setup in under 15 minutes, even without technical knowledge. Additionally, Trezor offers extensive documentation and customer support."
  }
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
}> = ({ question, answer, isOpen, toggleOpen, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-dark-green">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="support" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about Trezor hardware wallets and cryptocurrency security.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;