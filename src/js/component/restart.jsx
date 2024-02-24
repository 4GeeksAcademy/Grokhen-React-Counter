import React from "react";

const RestartButton = ({restartButton}) => {

    return(
        <button type="button" className="btn btn-danger" onClick={restartButton}>Restart</button>
    )
}

export default RestartButton;