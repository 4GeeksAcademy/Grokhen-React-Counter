import React from "react";

const ContinueButton = ({continueButton}) => {

    return(
        <button type="button" className="btn btn-success" onClick={continueButton}>Resume</button>
    )
}

export default ContinueButton;