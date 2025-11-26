import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface GeometryProps {
  scrollProgress: number;
}

function WireframeGeometry({ scrollProgress }: GeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    
    if (groupRef.current) {
      // React to scroll
      groupRef.current.rotation.z = scrollProgress * 0.5;
      groupRef.current.scale.setScalar(1 + scrollProgress * 0.3);
    }
  });

  const icosahedronGeometry = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} geometry={icosahedronGeometry}>
          <MeshDistortMaterial
            color="#436293"
            attach="material"
            distort={0.3}
            speed={2}
            wireframe
            opacity={0.3}
            transparent
          />
        </mesh>
      </Float>
      
      {/* Additional geometric elements */}
      <mesh position={[-3, 2, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#436293" wireframe opacity={0.2} transparent />
        </mesh>
      
      <mesh position={[3, -2, -1]}>
          <octahedronGeometry args={[0.8]} />
          <meshBasicMaterial color="#436293" wireframe opacity={0.15} transparent />
        </mesh>
    </group>
  );
}

function FloatingParticles() {
  const particlesCount = 50;
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particlesCount; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.5,
      });
    }
    return temp;
  }, []);

  return (
    <group>
      {particles.map((particle, i) => (
        <Float
          key={i}
          speed={particle.speed}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <mesh position={particle.position} scale={particle.scale}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial 
              color="#fcfcfc" 
              transparent 
              opacity={0.15}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

interface Scene3DProps {
  scrollProgress: number;
}

export default function Scene3D({ scrollProgress }: Scene3DProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#436293" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <WireframeGeometry scrollProgress={scrollProgress} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
