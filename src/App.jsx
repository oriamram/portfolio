import Welcome from "./components/sections/welcome/Welcome";
import About from "./components/sections/about/About";
import "./main.scss";
import Works from "./components/sections/experiences/Experiences";
import TimeLine from "./components/sections/timeline/TimeLine";
import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const WhatDeviceContext = createContext();

function App() {
	const isLaptop = useMediaQuery({
		query: "(max-width: 1000px)",
	});
	const isTablet = useMediaQuery({
		query: "(max-width: 850px)",
	});
	const isMobile = useMediaQuery({
		query: "(max-width: 450px)",
	});

	const whatDevice = isMobile ? "mobile" : isTablet ? "tablet" : isLaptop ? "laptop" : "pc";

	return (
		<WhatDeviceContext.Provider value={whatDevice}>
			<div className="App">
				<Welcome />
				<About />
				<TimeLine />
				<Works />
			</div>
		</WhatDeviceContext.Provider>
	);
}

export default App;
