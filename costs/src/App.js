import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// paginas
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Projects from './components/pages/Projects';
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Project from './components/pages/Project';

// container
import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
	return (
		<Router>
			<NavBar/>
			<Container customClass="min-height">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/empresa" element={<Company />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contato" element={<Contact />} />
					<Route path="/newproject" element={<NewProject />} />
					<Route path="/project/:id" element={<Project />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
