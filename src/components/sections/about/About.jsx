import React, { useContext } from "react";
import "./about.scss";
import Tech from "../../3d/Tech";
import * as techs from "/src/assets/technologies.json";
import { WhatDeviceContext } from "../../../App";

const About = () => {
	const device = useContext(WhatDeviceContext);
	const isMobile = device === "mobile" || device === "tablet" ? "url(bgs/layered-waves-about-mobile.svg)" : "url(bgs/layered-waves-about.svg)";

	return (
		<div className="About section" style={{ backgroundImage: isMobile, backgroundSize: "cover" }}>
			<div className="content about">
				<h1>Wanna know me?</h1>
				<p>
					After completing 5 points in each math, english, physics and computer science, I joind the army as a combat soldier and In just a
					year and a half, I rose to the rank of platoon sergeant.
					<br />
					<br />
					As my passion always have been becoming a programmer I enrolled in the "
					<strong style={{ fontWeight: 400 }}>Lohamim La-Hightech</strong>" program where I dedicated 6 months to fullstack studies (I Have
					to say that I have learned a lot and enjoied every moment).
					<br />
					Finally I could start my way in the industry and so I became a QA at Elbit Systems.
				</p>
			</div>

			<div className="logos about" id="one">
				{techs.default.map((techName) => (
					<Tech tech={techName} key={techName} />
				))}
			</div>
		</div>
	);
};

export default About;
