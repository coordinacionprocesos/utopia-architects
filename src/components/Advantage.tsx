import { motion } from 'framer-motion';
import { Zap, Shield, FileText } from 'lucide-react';

const advantages = [
  {
    icon: Zap,
    title: "Rapid Decision Making",
    description: "Get answers in hours, not weeks. Our streamlined process moves at the speed of opportunity.",
  },
  {
    icon: Shield,
    title: "Asset-Driven Underwriting",
    description: "We focus on the property's value and potential, not just traditional metrics.",
  },
  {
    icon: FileText,
    title: "Transparent Terms",
    description: "Clear documentation, honest communication, and terms you can understand and trust.",
  },
];

export default function Advantage() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">
            The Structural Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk">
            Built on a foundation of speed, security, and clarity
          </p>
        </motion.div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-start gap-8"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 glass-strong rounded-sm flex items-center justify-center">
                  <advantage.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-cinzel font-semibold mb-4">
                  {advantage.title}
                </h3>
                <p className="text-lg text-muted-foreground font-grotesk leading-relaxed">
                  {advantage.description}
                </p>
                
                {/* Blueprint-style decorative line */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-2 h-2 border border-primary" />
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical grid background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
    </section>
  );
}
