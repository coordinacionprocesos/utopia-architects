import { useEffect, useState, createContext, useContext, ReactNode } from 'react';
import { motion, useSpring } from 'framer-motion';

interface CursorContextType {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if touch device
    setIsMobile('ontouchstart' in window);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) {
    return <CursorContext.Provider value={{ isHovered, setIsHovered }}>{children}</CursorContext.Provider>;
  }

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      <div className="cursor-custom">
        {/* Lead dot */}
        <motion.div
          className="cursor-lead"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: 'hsl(var(--gold))',
            pointerEvents: 'none',
            zIndex: 9999,
            mixBlendMode: 'difference',
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
        />

        {/* Follower circle */}
        <motion.div
          className="cursor-follower"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '30px',
            height: '30px',
            border: '1px solid hsl(var(--gold))',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: 'difference',
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
      {children}
    </CursorContext.Provider>
  );
}
