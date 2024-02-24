import React, { useEffect } from "react";
import ReactDOM from "react-dom";


import "../styles/index.css";


import Home from "./component/home.jsx";



let intervalo;
let seconds = 0;

const clearCounter = () => {
    seconds = 0;
}

const pauseButton = () => {
    clearInterval(intervalo);
}

const restartButton = () => {
    clearCounter();
    clearInterval(intervalo);
    secondsFunction();
}

const continueButton = () => {
    secondsFunction();
}


const secondsFunction = () => {
    intervalo = setInterval(() => {
        ReactDOM.render(<Home value={seconds} clearCounter={clearCounter} pauseButton={pauseButton} restartButton={restartButton} continueButton={continueButton}/>, document.querySelector("#app"));
        seconds++;       
    }, 1000);
}
   
secondsFunction();
