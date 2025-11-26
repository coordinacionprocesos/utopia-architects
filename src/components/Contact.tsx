import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import ProjectIntake from './ProjectIntake';

export default function Contact() {
  return (
    <footer className="relative py-20 border-t border-border overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Project Intake Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-cinzel font-bold mb-4">
              Project Intake
            </h2>
            <p className="text-muted-foreground font-grotesk text-lg">
              Begin your application process
            </p>
          </div>
          <ProjectIntake />
        </motion.div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-cinzel font-bold mb-8">
              Let's Build Together
            </h2>
            <p className="text-muted-foreground font-grotesk text-lg mb-8">
              Ready to turn your vision into reality? Reach out to discuss your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 glass-strong rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-grotesk">Address</h3>
                <p className="text-muted-foreground font-grotesk">
                  5900 Balcones Drive, Suite 100
                  <br />
                  Austin, TX 78731
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 glass-strong rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 font-grotesk">Phone</h3>
                <a 
                  href="tel:210-284-0647" 
                  className="text-primary hover:text-primary/80 transition-colors font-grotesk text-lg"
                >
                  210-284-0647
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legal and footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground/60 font-grotesk leading-relaxed mb-4">
              Refunds, cancellations, and financial terms governed by written agreement. 
              Utopia Estates III LLC provides financial services only. All loans subject to 
              credit approval and property evaluation. Terms and conditions apply.
            </p>
            <p className="text-sm text-muted-foreground/60 font-grotesk">
              © {new Date().getFullYear()} Utopia Estates III LLC. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-border/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-border/30" />
    </footer>
  );
}
