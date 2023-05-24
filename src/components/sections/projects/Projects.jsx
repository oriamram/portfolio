import React from "react";
import "./projects.scss";
import ProjectCard from "../../3d/ProjectCard";

const Works = () => {
	return (
		<div className="Works section" style={{ backgroundImage: "url(bgs/blob-scatter-projects.svg)", backgroundSize: "cover" }}>
			<div className="content">
				<h1>Lorem, ipsum.</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa cupiditate rem a tenetur possimus.</p>
			</div>
			<div className="cards-container">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Works;
