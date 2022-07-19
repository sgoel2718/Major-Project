import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
//import Opportunities from "./components/Opportunities";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Tourism from "./components/Tour";
import Education from "./components/Education";
import { Routes, Route } from "react-router-dom";
import Opportunities from "./components/Opportunities";

function App() {
	return (
		<div className="App">
			{/* <header> */}
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Opportunities />} />
				<Route path="Jobs" element={<Jobs />} />
				<Route path="Tourism" element={<Tourism />} />
				<Route path="Education" element={<Education />} />
			</Routes>
			<Footer />
			{/* </Footer> */}
			{/* <Jobs /> */}
		</div>
	);
}

export default App;
