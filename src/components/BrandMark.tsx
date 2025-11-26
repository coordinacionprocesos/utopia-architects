import { motion } from 'framer-motion';

export default function BrandMark() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-6 left-6 z-20"
    >
      <div className="px-4 py-2 glass rounded-sm border border-white/12 shadow-[var(--shadow-deep)] hover:ambient-cerulean shimmer">
        <span className="font-cinzel tracking-[0.35em] text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70 drop-shadow-[0_0_14px_hsl(var(--glow-cerulean))]">
          UTOPIA <span className="mx-1 text-muted-foreground">/</span> ESTATES
        </span>
      </div>
    </motion.div>
  );
}