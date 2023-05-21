import React from "react";
import "./timeLine.scss";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as blob_1 from "/blob-timeline-1.svg";

const TimeLineCard = () => (
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

const TimeLine = () => {
	return (
		<div className="TimeLine section">
			<div className="content time-line">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
			</div>
			<div className="time-line">
				<VerticalTimeline>
					<TimeLineCard />
					<TimeLineCard />
					<TimeLineCard />
					<TimeLineCard />
				</VerticalTimeline>
			</div>
			<div style={{ width: "100px", height: "100px", backgroundImage: "url(blob-timeline-1.svg)", backgroundSize: "cover" }}></div>
		</div>
	);
};

export default TimeLine;
