import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { Skeleton } from "@mui/material";

const defaultOptions = {
	reverse: true, // reverse the tilt direction
	max: 25, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 99999, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "", // Easing on enter/exit.
};

const ProjectCard = ({ data }) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	return (
		<Tilt className="project" options={defaultOptions} style={{ transition: ".08s", position: "relative" }}>
			<img
				src={data.img}
				style={imgLoaded ? { display: "block" } : { display: "none" }}
				onLoad={() => {
					setImgLoaded(true);
				}}
			/>
			<a
				href={data.url}
				target="_blank"
				style={
					imgLoaded
						? {
								backgroundImage: "url(projectPics/github.svg)",
								width: "30px",
								height: "30px",
								backgroundSize: "cover",
								right: "12px",
								top: "12px",
								position: "absolute",
						  }
						: { display: "none" }
				}
			></a>
			<Skeleton
				variant="rectangular"
				width={"100%"}
				height={"40%"}
				style={imgLoaded ? { display: "none" } : { background: "#533C63", borderRadius: "5px" }}
			/>

			<h3>{data.title}</h3>
			<p>{data.content}</p>
		</Tilt>
	);
};

export default ProjectCard;
