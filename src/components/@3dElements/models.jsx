import { useGLTF } from '@react-three/drei';

export function ModelComputer() {
  const { scene } = useGLTF('/assets/models/desktop_pc/scene.gltf');
  return <primitive object={scene} scale={0.75} rotation={[-0.01, 0.26, -0.1]} position={[0, -3.25, -1.5]} />;
}
