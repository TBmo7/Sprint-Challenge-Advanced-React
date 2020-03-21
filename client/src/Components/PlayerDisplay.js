import React from "react";
import PlayerCard from "./PlayerCard";



class PlayerDisplay extends React.Component{
    
    constructor(){
        super();
        this.state = {
            playerData: []
        };
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(players => this.setState({playerData: players}))
        .catch(err => console.log("Error ", err))
        
    }
    
    
   
    render(){
        console.log("Player Data ",this.state.playerData);
    return(
        <div className = "holderHolder">
        <div className = "cardHolder">
            {this.state.playerData.map(data=>
                <PlayerCard 
                key = {data.id}
                name ={data.name}
                country = {data.country}
                searches = {data.searches}
                />
                
                )}
           
           
        </div>
        </div>

    )

}
}

export default PlayerDisplay