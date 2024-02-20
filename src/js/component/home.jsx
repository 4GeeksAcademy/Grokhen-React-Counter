import React from "react";
import Counter from "./counter";



const Home = ({ value }) => {
	return (
		<div className="container text-center">
			<div className="row card-group justify-content-center ">
				<div className="col-1 text-bg-dark" >
					<h2 className="fs-1"><i className="far fa-clock"></i></h2>
				</div>
				<div className="col-1 text-bg-dark" >
					<h2 className=" fs-1">{(Math.floor(value / 10000)) % 10}</h2>
				</div>
				<div className="col-1  text-bg-dark" >
					<h2 className=" fs-1">{(Math.floor(value / 1000)) % 10}</h2>
				</div>
				<div className="col-1 text-bg-dark" >
					<h2 className=" fs-1">{(Math.floor(value / 100)) % 10}</h2>
				</div>
				<div className="col-1 text-bg-dark" >
					<h2 className=" fs-1">{(Math.floor(value / 10)) % 10}</h2>
				</div>
				<div className="col-1 text-bg-dark" >
					<h2 className=" fs-1">{(Math.floor(value / 1)) % 10}</h2>
				</div>
			</div>
		</div>
	);
};

export default Home;
