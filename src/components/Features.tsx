import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, RefreshCw, Zap, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-dark-green" />,
    title: "Military-Grade Security",
    description: "Benefit from advanced cryptographic security that keeps your private keys isolated from potential online threats."
  },
  {
    icon: <Lock className="h-8 w-8 text-dark-green" />,
    title: "Offline Storage",
    description: "Store your cryptocurrency offline in cold storage, completely protected from online vulnerabilities and hacking attempts."
  },
  {
    icon: <Key className="h-8 w-8 text-dark-green" />,
    title: "PIN Protection",
    description: "Access your device with a secure PIN code, adding an essential layer of protection against unauthorized access."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-dark-green" />,
    title: "Easy Recovery",
    description: "Restore your wallet anytime with your recovery seed phrase, ensuring you never lose access to your digital assets."
  },
  {
    icon: <Zap className="h-8 w-8 text-dark-green" />,
    title: "Multi-Currency Support",
    description: "Manage Bitcoin, Ethereum, and thousands of other cryptocurrencies from a single secure device."
  },
  {
    icon: <Fingerprint className="h-8 w-8 text-dark-green" />,
    title: "User Verification",
    description: "Verify all transactions on the device screen to prevent malware from redirecting your funds."
  }
];

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 flex flex-col items-start"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="mb-4 p-3 bg-green-50 rounded-lg"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Advanced Features</span> for Ultimate Security
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover why Trezor is the preferred choice for cryptocurrency security among experts and beginners alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;