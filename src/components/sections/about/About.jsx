import React, { useContext } from "react";
import "./about.scss";
import Tech from "../../3d/Tech";
import * as techs from "/src/assets/technologies.json";
import { WhatDeviceContext } from "../../../App";

const About = () => {
	const device = useContext(WhatDeviceContext);
	const isMobile = device === "mobile" || device === "tablet" ? "url(layered-waves-about-mobile.svg)" : "url(layered-waves-about.svg)";

	return (
		<div className="About section" style={{ backgroundImage: isMobile, backgroundSize: "cover" }}>
			<div className="content about">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptate sunt facilis tenetur hic voluptatum, necessitatibus
					pariatur corrupti fugit corporis. Delectus nam quo officiis quae at libero fugit voluptatibus velit qui minima aliquam expedita
					eveniet dolorum pariatur sint, odio suscipit quibusdam porro explicabo. Dolorum praesentium sint minus, at ipsam atque. Voluptatem
				</p>
			</div>
			<div className="logos about">
				{techs.default.map((techName) => (
					<Tech tech={techName} key={techName} />
				))}
			</div>
		</div>
	);
};

export default About;
