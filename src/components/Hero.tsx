import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticWrapper from './MagneticWrapper';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 leading-tight">
              Constructing Vision.
              <br />
              <span className="text-gradient">Financing Reality.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 font-grotesk font-light tracking-wide"
          >
            Utopia Estates III LLC. The premier hard money lender for Texas visionaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MagneticWrapper strength={0.4}>
              <Button
                size="lg"
                variant="outline"
                className="glass-strong border-gold text-gold hover:bg-gold hover:text-background group text-lg px-8 py-6 transition-all duration-300"
              >
                Get Funded
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticWrapper>
          </motion.div>
        </motion.div>
      </div>

      {/* Architectural accent lines */}
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
