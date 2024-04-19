import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { SlNotebook } from "react-icons/sl";
import { TbBarbell } from "react-icons/tb";
import { BsGear } from "react-icons/bs";

const TimeLineCard = ({ cardData }) => {
	const studiesStyle = { background: "#a8d8b9", color: "#003228", boxShadow: "0 3px rgb(49 67 85 / 23%)" };
	const trainingStyle = { background: "#aec2d7", color: "#003228", boxShadow: "0 3px rgb(49 67 85 / 23%)" };
	const generalStyle = { background: "#d1d9e7", color: "#003228", boxShadow: "0 3px rgb(49 67 85 / 23%)" };
	const workStyle = { background: "#E8EBB1", color: "#003228", boxShadow: "0 3px rgb(49 67 85 / 23%)" };

	const cardStyle = cardData.spec === "studies" ? studiesStyle : cardData.spec === "training" ? trainingStyle : cardData.spec === "work" ? workStyle : generalStyle;

	const studiesIconStyle = {
		background: "#d4eae1",
		display: "flex",
		color: "#003228",
		boxShadow: "0 0 0 4px #c1d6ed, inset 0 2px 0 rgba(0,0,0,.06), 0 3px 0 4px rgba(0,0,0,.05)",
	};
	const trainingIconStyle = {
		background: "#c6d3e1",
		display: "flex",
		color: "#003228",
		boxShadow: "0 0 0 4px #c1d6ed, inset 0 2px 0 rgba(0,0,0,.06), 0 3px 0 4px rgba(0,0,0,.05)",
	};
	const generalIconStyle = {
		background: "#e5ecf5",
		display: "flex",
		color: "#003228",
		boxShadow: "0 0 0 4px #c1d6ed, inset 0 2px 0 rgba(0,0,0,.06), 0 3px 0 4px rgba(0,0,0,.05)",
	};

	const workIconStyle = {
		background: "#e5ecf5",
		display: "flex",
		color: "#003228",
		boxShadow: "0 0 0 4px #c1d6ed, inset 0 2px 0 rgba(0,0,0,.06), 0 3px 0 4px rgba(0,0,0,.05)",
	};

	const iconStyle =
		cardData.spec === "studies" ? studiesIconStyle : cardData.spec === "training" ? trainingIconStyle : cardData.spec === "work" ? workIconStyle : generalIconStyle;

	return (
		<VerticalTimelineElement
			contentStyle={cardStyle}
			contentArrowStyle={{ borderRight: "7px solid #3d6385" }}
			iconStyle={iconStyle}
			icon={cardData.spec === "studies" ? <SlNotebook className="icon" /> : cardData.spec === "training" ? <TbBarbell className="icon" /> : <BsGear />}
			date={cardData.date}
			className="timeline-component"
		>
			<h1>{cardData.title}</h1>
			<h5>{cardData.subTitle}</h5>
			<p>{cardData.content}</p>
		</VerticalTimelineElement>
	);
};

export default TimeLineCard;
