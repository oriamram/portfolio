import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: true, // reverse the tilt direction
	max: 50, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 2000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ProjectCard = () => {
	return (
		<Tilt className="project" options={defaultOptions}>
			<img src="https://user-images.githubusercontent.com/97836572/192986731-464c14d2-e810-48c3-a1d4-f780a424e29b.png" />
			<h3>Lorem, ipsum dolor.</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, veritatis ratione hic animi molestias cupiditate?</p>
		</Tilt>
	);
};

export default ProjectCard;
