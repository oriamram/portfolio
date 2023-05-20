import React, { useContext } from "react";
import "./Welcome.scss";
import { WhatDeviceContext } from "../../../App";

const Welcome = () => {
	const device = useContext(WhatDeviceContext);

	const isMobile =
		device === "mobile"
			? "url(blob-scene-welcome-mobile.svg)"
			: device === "tablet"
			? "url(blob-scene-welcome-tablet.svg)"
			: "url(blob-scene-welcome.svg)";

	return (
		<div className="Welcome" style={{ backgroundImage: isMobile, backgroundSize: "cover" }}>
			<div className="content welcome">
				<h1>Lorem ipsum dolor sit.</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur non ullam reiciendis, accusamus maxime illo modi! Doloremque
					nobis sit labore libero. Optio inventore modi animi soluta voluptates vero ipsam ratione molestiae, nisi magnam asperiores labore
				</p>
			</div>
		</div>
	);
};

export default Welcome;
