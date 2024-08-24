// App.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';

// Componente para el terreno
const Terrain = () => {
  const [texture, setTexture] = useState(null);
  const meshRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const worldWidth = 256;
    const worldDepth = 256;
    const worldHalfWidth = worldWidth / 2;
    const worldHalfDepth = worldDepth / 2;

    const data = generateHeight(worldWidth, worldDepth);

    // Ajustar la cámara
    camera.position.y = data[worldHalfWidth + worldHalfDepth * worldWidth] + 2000;
    camera.position.x = 2000;
    camera.position.z = 2000;
    camera.lookAt(new THREE.Vector3(0, data[worldHalfWidth + worldHalfDepth * worldWidth], 0));
    camera.updateProjectionMatrix();

    // Crear la geometría del plano
    const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
    geometry.rotateX(-Math.PI / 2);

    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      vertices[i + 1] = data[i / 3] * 10;
    }

    const canvasTexture = generateTexture(data, worldWidth, worldDepth);
    setTexture(new THREE.CanvasTexture(canvasTexture));

    // Clean up on unmount
    return () => {
      canvasTexture.dispose();
    };
  }, [camera]);

  return (
    <mesh ref={meshRef} receiveShadow>
      <planeGeometry args={[7500, 7500, 255, 255]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

// Generador de altura
const generateHeight = (width, height) => {
  const size = width * height;
  const data = new Uint8Array(size);
  const perlin = new ImprovedNoise();
  const z = Math.random() * 100;
  let quality = 1;

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = Math.floor(i / width);
      data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
    }
    quality *= 5;
  }

  return data;
};

// Generador de textura
const generateTexture = (data, width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.fillStyle = '#000';
  context.fillRect(0, 0, width, height);
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const imageData = image.data;
  const vector3 = new THREE.Vector3(0, 0, 0);
  const sun = new THREE.Vector3(1, 1, 1).normalize();

  for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
    vector3.set(data[j - 2] - data[j + 2], 2, data[j - width * 2] - data[j + width * 2]).normalize();

    const shade = vector3.dot(sun);

    imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
    imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
    imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.007);
  }

  context.putImageData(image, 0, 0);

  const canvasScaled = document.createElement('canvas');
  canvasScaled.width = width * 4;
  canvasScaled.height = height * 4;
  const contextScaled = canvasScaled.getContext('2d');
  contextScaled.scale(4, 4);
  contextScaled.drawImage(canvas, 0, 0);

  const imageScaled = contextScaled.getImageData(0, 0, canvasScaled.width, canvasScaled.height);
  const imageDataScaled = imageScaled.data;

  for (let i = 0, l = imageDataScaled.length; i < l; i += 4) {
    const v = Math.floor(Math.random() * 5);
    imageDataScaled[i] += v;
    imageDataScaled[i + 1] += v;
    imageDataScaled[i + 2] += v;
  }

  contextScaled.putImageData(imageScaled, 0, 0);

  return canvasScaled;
};

const RaycasterHelper = () => {
  const helperRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    function onPointerMove(event) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const intersects = raycaster.intersectObject(helperRef.current);
      if (intersects.length > 0) {
        const intersect = intersects[0];
        helperRef.current.position.copy(intersect.point);
        helperRef.current.lookAt(intersect.face.normal);
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    return () => window.removeEventListener('pointermove', onPointerMove);
  });

  return (
    <mesh ref={helperRef}>
      <coneGeometry args={[20, 100, 3]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export function TerrainCanvas() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Terrain />
      <RaycasterHelper />
    </Canvas>
  );
}
