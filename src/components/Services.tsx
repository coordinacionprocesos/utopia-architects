import { motion } from 'framer-motion';
import { Building2, GitBranch, Hammer, Construction } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: "Hard Money Loans",
    description: "Asset-based financing secured by real estate. Fast approvals, flexible terms.",
  },
  {
    icon: GitBranch,
    title: "Bridge Financing",
    description: "Short-term capital solutions that bridge the gap between transactions.",
  },
  {
    icon: Hammer,
    title: "Fix & Flip",
    description: "Renovation funding for investors transforming properties into profit.",
  },
  {
    icon: Construction,
    title: "New Construction",
    description: "Ground-up project financing for visionaries building from scratch.",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden blueprint-line">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">
            The Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk">
            Structured financial solutions for every stage of your project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 group cursor-pointer transition-all duration-300 hover:border-primary/50 noise"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <h3 className="text-2xl font-cinzel font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-grotesk leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 w-12 h-0.5 bg-primary/50 group-hover:w-24 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
