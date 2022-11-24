import "./App.css";
import Main from "./components/JSXFile/Main";
import NavBar from "./components/JSXFile/NavBar";
import ModelS from './images/ModelS.jpg'
import ModelY from './images/ModelY.jpg'
import Model3 from './images/Model3.jpg'
import LogoX from './images/Logo.png'


function App() {
	return (
		<div className="App">
		<NavBar image={LogoX} />
		<div className="">
				<Main image={Model3} title="Model 3" subtitle="Schedule a Test Drive" />
		</div>
		<div className="">
				<Main image={ModelY} title="Model Y" subtitle="Schedule a Test Drive" />
		</div>
		<div className="">

				<Main image={ModelS} title="Model S" subtitle="Schedule a Test Drive"/>
		</div>
		</div>
	);
}

export default App;
