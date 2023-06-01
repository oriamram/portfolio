import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimeLineCard = () => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#d5e4f4", color: "#003228", boxShadow: "0 3px rgb(49 67 85 / 23%)" }}
			contentArrowStyle={{ borderRight: "7px solid #3d6385" }}
			iconStyle={{
				background: "#f5f5f5",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				color: "#003228",
				boxShadow: "0 0 0 4px #d5e4f4, inset 0 2px 0 rgba(0,0,0,.06), 0 3px 0 4px rgba(0,0,0,.05)",
			}}
			icon={"a"}
			date="12-7-2022"
			className="timeline-component"
		>
			<h1>Lorem, ipsum dolor.</h1>
			<h5>Lorem ipsum dolor sit.</h5>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non atque consequuntur veritatis, repudiandae doloribus numquam fugiat alias
				magnam error at!
			</p>
		</VerticalTimelineElement>
	);
};

export default TimeLineCard;
