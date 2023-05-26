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

const ProjectCard = ({ data }) => {
	return (
		<Tilt className="project" options={defaultOptions}>
			<img src={data.img} />
			<h3>{data.title}</h3>
			<p>{data.content}</p>
		</Tilt>
	);
};

export default ProjectCard;
