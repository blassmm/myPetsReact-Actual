import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Fiber = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={ 0 } scale={ 2 }>
      <boxGeometry scale={1.5} />
      <meshNormalMaterial color="mediumpurple" wireframe />
    </mesh>
  );
};
export default Fiber;
