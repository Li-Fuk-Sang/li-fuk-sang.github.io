import React from "react";

function Total(props){
    if(props.total >= 0){
        return(
            <div className = "Total">
                <div className = "TotalDescription">Should <a>Receive: </a></div>
                <div className = "TotalAmount">{props.total}</div>
            </div>
        )
    }
    else{
        return(
            <div className = "Total">
                <div className = "TotalDescription">Should <a>Pay: </a></div>
                <div className = "TotalAmount">{-props.total}</div>
            </div>
        )
    }
}

export default Total; 