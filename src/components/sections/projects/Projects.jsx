import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.scss";
import { WhatDeviceContext } from "../../../App";
import ProjectCard from "../../3d/ProjectCard";
import * as projectsData from "/src/assets/projects.json";

const Projects = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const device = useContext(WhatDeviceContext);

	const nextProject = () => {
		setDirection(1);
		if (index === projectsData.default.length - 1) {
			setIndex(0);
		} else setIndex(index + 1);
	};

	const prevProject = () => {
		setDirection(-1);

		if (index === 0) {
			setIndex(projectsData.default.length - 1);
		} else setIndex(index - 1);
	};
	const variants = {
		initial: {
			x: 200 * direction,

			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
		},
		exit: {
			x: -200 * direction,
			opacity: 0,
		},
	};

	return (
		<div className="Works section" style={{ backgroundImage: "url(bgs/blob-scatter-projects.svg)", backgroundSize: "cover" }}>
			<div className="content">
				<h1>Projects</h1>
				<p>This is my portfolio, a blend of projects that I've created individually as well as collaborations within a team.</p>
			</div>
			<div className="cards-container">
				<button id="prev">
					<span className="material-symbols-outlined" onClick={prevProject}>
						arrow_back_ios
					</span>
				</button>

				<motion.div
					variants={variants}
					animate="animate"
					initial="initial"
					exit="exit"
					className="project-card"
					key={projectsData.default[index].title}
				>
					{device === "mobile" || device == "tablet" ? (
						<ProjectCard data={projectsData.default[index]} />
					) : (
						projectsData.default.map((projectData) => {
							return <ProjectCard data={projectData} key={projectData.title} />;
						})
					)}
				</motion.div>

				<button id="next">
					<span className="material-symbols-outlined" onClick={nextProject}>
						arrow_forward_ios
					</span>
				</button>
			</div>
		</div>
	);
};

export default Projects;
