import React from "react";
import Card from "./card";



const Counter = () => {
    let seconds = 0;
    let secondsArray = "";


    const secondsFunction = setInterval(() => {
        seconds++;
        secondsArray = seconds.toString().split("");
        console.log(seconds, secondsArray);
        if (seconds === 12) {
            clearInterval(secondsFunction);
        }
    }, 1000);

    return (
        <div className="card">
            <div>reloj</div>
            <Card value={secondsArray[0] ? secondsArray[0] : "0"} />
            <Card value={secondsArray[1] ? secondsArray[1] : "0"} />
            <Card value={secondsArray[2]} />
        </div>
    )

}


export default Counter;