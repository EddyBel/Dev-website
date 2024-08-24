import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { ModelComputer as Model } from './models';
import { LoaderFire } from '../@loaders/fire.loader';
import { Html } from '@react-three/drei';

function CanvasLoader() {
  return (
    <Html>
      <div className="w-full h-[500pz] flex items-center justify-center animate-fade-up">
        <LoaderFire />
      </div>
    </Html>
  );
}

export function ComputerCanvas() {
  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <mesh>
          <hemisphereLight intensity={1} groundColor={'#11130e'} />
          <pointLight intensity={1} color={'#bec5fa'} />
          <Model />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
