import React from "react";


function PlayerCard(props) {
    // console.log("props", props);
   
   
    return(

        <div className = "playerCard">
            <div className = "playerName">
                Name: {props.name}
            </div>
            <div className = "country">
                Country: {props.country}
            </div>
            <div className = "searches">
                Searches: {props.searches}
            </div>
              

        </div>

    )


}

export default PlayerCard;