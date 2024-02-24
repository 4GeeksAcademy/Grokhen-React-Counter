import React from "react";

const ClearButton = ({clearCounter}) => {

    return(
        <button type="button" className="btn btn-danger" onClick={clearCounter}>Reset</button>
    )
}

export default ClearButton;