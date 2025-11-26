import { useEffect, useState } from 'react';
import Scene3D from '@/components/Scene3D';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
// RecentClosings removed per Sovereign theme refactor
import Advantage from '@/components/Advantage';
import Contact from '@/components/Contact';


const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Scene3D scrollProgress={scrollProgress} />
      
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Advantage />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
