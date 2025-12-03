import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';

// Dönen Geometrik Şekil (Küp)
const GeometricalShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Sürekli dönüş animasyonu
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.0}>
      <boxGeometry args={[1, 1, 1]} />
      
      <meshStandardMaterial 
        color="#34d399" // Emerald-400
        wireframe={true}
        transparent={true}
        opacity={0.4}
      />
    </mesh>
  );
};

export const TechShape = () => {
  return (
    <div className="w-full h-[300px] md:h-[500px] absolute top-0 left-0 z-0 pointer-events-none opacity-60">
      <Canvas alpha={true} gl={{ preserveDrawingBuffer: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        
        {/* Işıklandırma */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <GeometricalShape />
        </Float>
      </Canvas>
    </div>
  );
};

export default TechShape;