import "./timeLine.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useMediaQuery } from "react-responsive";
import TimeLineCard from "./TimeLineCard";
import * as timeCardsData from "/src/assets/timeCardsData.json";

const TimeLine = () => {
	const isSmallScreen = useMediaQuery({
		query: "(max-width: 1170px)",
	});

	const shouldDisplayBg = isSmallScreen ? "" : "url(bgs/layered-peaks-timeline-2.svg)";

	return (
		<div className="TimeLine section" style={{ backgroundImage: shouldDisplayBg, backgroundSize: "cover" }}>
			<div
				style={{
					backgroundImage: "url(bgs/layered-peaks-timeline-1.svg)",
					backgroundSize: "cover",
					width: "100%",
					height: "100%",
					position: "absolute",
				}}
			></div>
			<div className="content time-line">
				<h1>They Say Life Is Short</h1>
				<p>Or.. Is It?</p>
			</div>
			<div className="time-line">
				<VerticalTimeline>
					{timeCardsData.default.map((cardData) => (
						<TimeLineCard cardData={cardData} key={cardData.title} />
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default TimeLine;
