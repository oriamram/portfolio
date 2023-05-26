import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: true, // reverse the tilt direction
	max: 25, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 99999, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "", // Easing on enter/exit.
};

const ProjectCard = ({ data }) => {
	return (
		<Tilt className="project" options={defaultOptions} style={{ transition: ".08s" }}>
			<img src={data.img} />
			<h3>{data.title}</h3>
			<p>{data.content}</p>
		</Tilt>
	);
};

export default ProjectCard;
