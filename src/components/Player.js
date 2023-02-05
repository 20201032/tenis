function Player({player}){
    return(
    <div>
        <h3>{player.Name}</h3>
        <div className="player-center">
            <div className="player-left">
                <p><b>Age:</b> {player.Age}<br></br>
                <b>Points:</b> {player.Points}<br></br>
            </p>
            </div>
            
            <div className="rank">
                 <h2><b>Rank:</b> {player.Rank}<br></br></h2> 
            </div>
          
        </div>
        
            
      
    </div> 

    )
}
export default Player;