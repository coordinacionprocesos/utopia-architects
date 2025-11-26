import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

const deals = [
  {
    id: 1,
    name: 'The Austin Heights',
    loan: '$1.2M',
    type: 'New Construction',
    location: 'Austin, TX',
  },
  {
    id: 2,
    name: 'San Antonio Refi',
    loan: '$450K',
    type: 'Bridge',
    location: 'San Antonio, TX',
  },
  {
    id: 3,
    name: 'Dallas Industrial',
    loan: '$2.1M',
    type: 'Commercial',
    location: 'Dallas, TX',
  },
];

export default function RecentClosings() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-cinzel font-bold mb-4">Recent Closings</h2>
          <p className="text-muted-foreground font-grotesk text-lg max-w-2xl mx-auto">
            Executed transactions. Delivered capital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <MagneticWrapper strength={0.2}>
                {/* Blueprint-style card */}
                <div className="relative bg-midnight border border-border/30 rounded-sm p-8 overflow-hidden hover:border-gold/30 transition-all duration-300">
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, hsl(var(--steel)) 1px, transparent 1px),
                      linear-gradient(to bottom, hsl(var(--steel)) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-steel/30" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-steel/30" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-steel/30" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-steel/30" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-gold/30 rounded-sm">
                    <TrendingUp className="w-6 h-6 text-gold" />
                  </div>

                  {/* Project name */}
                  <h3 className="text-2xl font-cinzel font-bold mb-4 group-hover:text-gold transition-colors">
                    {deal.name}
                  </h3>

                  {/* Data fields */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-sm text-muted-foreground font-grotesk">Loan Amount</span>
                      <span className="text-xl font-mono text-gold font-bold">{deal.loan}</span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="text-sm text-muted-foreground font-grotesk">Type</span>
                      <span className="text-sm font-grotesk text-foreground">{deal.type}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground font-grotesk">Location</span>
                      <span className="text-sm font-grotesk text-foreground">{deal.location}</span>
                    </div>
                  </div>

                  {/* Reference number */}
                  <div className="mt-6 pt-4 border-t border-border/20">
                    <span className="text-xs font-mono text-muted-foreground/60">
                      REF: UTX-{String(deal.id).padStart(4, '0')}
                    </span>
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                </div>
              </div>
              </MagneticWrapper>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
