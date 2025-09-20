import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container mx-auto px-6">{children}</div>
  </motion.section>
);

export default SectionWrapper;