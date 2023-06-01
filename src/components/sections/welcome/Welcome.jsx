import React, { useContext } from "react";
import "./welcome.scss";
import { WhatDeviceContext } from "../../../App";

const Welcome = () => {
	const device = useContext(WhatDeviceContext);

	const bgByDevice =
		device === "mobile"
			? "url(bgs/blob-scene-welcome-mobile.svg)"
			: device === "tablet"
			? "url(bgs/blob-scene-welcome-tablet.svg)"
			: "url(bgs/blob-scene-welcome.svg)";

	return (
		<div className="Welcome" style={{ backgroundImage: bgByDevice, backgroundSize: "cover" }}>
			<div className="content welcome">
				<h1>The Ori Show</h1>
				<p>
					Welcome to my world, presents to you by the powers of a <span className="bold">Full</span>-<span className="bold">Stack</span>
					<span className="bold"> Developer!</span>
					<br /> whether you are an employer seeking insights or just someone I <span className="light">forced</span> to visit the website,
					you've come to the right place. Projects, technologies, hobbies and much more! <br />
					so why wait?
				</p>
			</div>
		</div>
	);
};

export default Welcome;
