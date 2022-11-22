// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/Card/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div className="App">
			{/* <h1>
				<NavBar className="NavBar" />
			</h1>
			<h2>
				<Header />
			</h2> */}
			<h3>
				<ProfileCard image={AlexaImage} title="Alexa" />
			</h3>
			<h3>
				<ProfileCard image={CortanaImage} title="Cortana" />
			</h3>
			<h3>
				<ProfileCard image={SiriImage} title="Siri" />
			</h3>
		</div>
	);
}

export default App;
