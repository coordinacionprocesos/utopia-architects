import { motion } from 'framer-motion';

const manifestoPoints = [
  {
    title: "Speed is our currency.",
    description: "In real estate, timing is everything. Our streamlined process ensures rapid decisions.",
  },
  {
    title: "Clarity is our contract.",
    description: "Transparent terms, secure documentation, zero surprises. Every agreement is crystal clear.",
  },
  {
    title: "Texas is our territory.",
    description: "Deep roots in Texas real estate. We understand the market, the terrain, the opportunity.",
  },
];

export default function Manifesto() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">
            The Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-grotesk">
            We provide asset-based financing focused on speed and secure documentation.
            Helping you acquire, renovate, and build.
          </p>
        </motion.div>

        <div className="space-y-32">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-12`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-cinzel font-bold mb-4 text-gradient">
                  {point.title}
                </h3>
                <p className="text-lg text-muted-foreground font-grotesk">
                  {point.description}
                </p>
              </div>

              <div className="flex-1 flex justify-center">
                <div className="w-48 h-48 glass rounded-sm flex items-center justify-center">
                  <div className="text-8xl font-cinzel text-primary/20">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
