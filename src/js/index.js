//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

//include bootstrap npm library into the bundle
//import "bootstrap";
//import "./component/icons.js";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<img
					src="https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/6/1d/Magis_Tempo-Wanduhr_800x800-ID44985-4cb53f9a41684fcf6402aa3cf023d377.jpg"
					width="70px"
				/>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number
};

var counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
