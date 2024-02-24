import React from "react";

const ClearButton = ({clearCounter}) => {

    return(
        <button type="button" className="btn btn-warning" onClick={clearCounter}>Clear</button>
    )
}

export default ClearButton;