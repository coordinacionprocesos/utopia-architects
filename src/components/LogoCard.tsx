import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';
import Logo from '@/Assets/Images/Logo.png';

export default function LogoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;
    setTilt({ rx: -yPercent * 10, ry: xPercent * 10 });
  };

  const resetTilt = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">
        <MagneticWrapper strength={0.25}>
          <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            animate={{ rotateX: tilt.rx, rotateY: tilt.ry, scale: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 12 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="group relative mx-auto max-w-md glass-strong border border-gold rounded-sm overflow-hidden shadow-[var(--shadow-deep)] hover:shadow-[var(--shadow-gold)]"
          >
            <div className="absolute inset-0 shimmer pointer-events-none" />
            <div className="p-8 bg-gradient-to-br from-gold/10 via-transparent to-accent/10">
              <img
                src={Logo}
                alt="Utopia Estates III LLC Logo"
                className="w-full h-40 object-contain drop-shadow-[0_0_24px_hsl(var(--gold-glow))]"
                style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
              />
            </div>
          </motion.div>
        </MagneticWrapper>
      </div>
    </section>
  );
}