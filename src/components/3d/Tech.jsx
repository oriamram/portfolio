import React, { useContext, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture, useProgress, Html } from "@react-three/drei";
import { WhatDeviceContext } from "../../App";
import { Skeleton } from "@mui/material";

const Tech = ({ tech }) => {
	const device = useContext(WhatDeviceContext);
	const { progress } = useProgress();
	const decal = useTexture(`techs/${tech}.png`);

	return (
		<>
			{progress < 100 ? (
				<Html>
					<Skeleton variant="circular" width={70} height={70} />
				</Html>
			) : (
				<Float speed={3} rotationIntensity={2} floatIntensity={6}>
					<ambientLight intensity={0.3} />
					<directionalLight position={[0, 0, 0.05]} />
					<mesh castShadow receiveShadow scale={device === "mobile" ? 1.2 : device === "tablet" ? 1.5 : device === "laptop" ? 2 : 2.25}>
						<icosahedronGeometry args={[1, 3]} />
						<meshStandardMaterial color={"rgb(152, 186, 238)"} polygonOffset polygonOffsetFactor={-10} flatShading />
						<Decal position={[0, 0, 1]} map={decal} scale={[-4, 2]} />
					</mesh>
				</Float>
			)}
		</>
	);
};

const TechCanvas = ({ tech }) => {
	const device = useContext(WhatDeviceContext);

	return (
		<>
			<Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }} style={{ width: "30%" }}>
				{device === "mobile" || device === "tablet" ? <></> : <OrbitControls enableZoom={false} />}
				<Tech tech={tech} />
			</Canvas>
		</>
	);
};
export default TechCanvas;
