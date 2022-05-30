import Header from "./components/atoms/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/atoms/Footer";
import "./assets/css/main.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="components">
					<Header />
					<Routes>
						<Route index element={<Home />} />
						<Route path="/_hello" element={<Home />} />
						<Route path="/_about-me" element={<About />} />
						<Route path="/_projects" element={<Projects />} />
						<Route path="/_contact" element={<Contact />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
