import React from "react";
import Card from "./card";



const Home = ({ value }) => {
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
		</div>
	);
};

export default Home;
