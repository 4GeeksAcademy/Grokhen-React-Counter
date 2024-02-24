import React from "react";
import Card from "./card";
import ClearButton from "./clearButton";
import PauseButton from "./pauseButton";
import RestartButton from "./restart";
import ContinueButton from "./continueButton";


const Home = ({ value , clearCounter, pauseButton, restartButton, continueButton}) => {
	return (
		<div className="container text-center">
			<div className="row card-group justify-content-center ">
				<Card digit=<i className="far fa-clock"></i> />
				<Card digit= {(Math.floor(value / 10000)) % 10} />
				<Card digit= {(Math.floor(value / 1000)) % 10} />
				<Card digit= {(Math.floor(value / 100)) % 10} />
				<Card digit= {(Math.floor(value / 10)) % 10} />
				<Card digit= {(Math.floor(value / 1)) % 10} />
			</div>
			<ClearButton clearCounter={clearCounter}/>
			<PauseButton pauseButton={pauseButton}/>
			<RestartButton restartButton={restartButton}/>
			<ContinueButton ContinueButton={continueButton}/>
		</div>
	);
};

export default Home;
