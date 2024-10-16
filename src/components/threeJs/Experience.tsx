/* eslint-disable react/no-unknown-property */
import { OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Experience = () => {
  const texture = useTexture("https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/af52313d-daeb-48bf-8a30-012cd762caed/5ac433e9-56d5-423f-aab1-834c2b1a0bb7.png");

  // Reference to the mesh so we can manipulate it
  const meshRef = useRef();

  // Animate the mesh with useFrame (this function will run every frame)
  useFrame((state, delta) => {
    // Simple swaying or rotating motion (like a gentle "farmer" motion)
    meshRef.current.rotation.x += delta * 0.2; // Slow rotation on the x-axis
    meshRef.current.rotation.y += delta * 0.3; // Slightly faster rotation on the y-axis
  });


  return (
    <>
      <OrbitControls />
    
        <mesh ref={meshRef} position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>


    </>
  );
};