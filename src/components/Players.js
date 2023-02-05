import "./Players.css";
import Player from "./Player";
import { useState } from "react";
function Players({players}){
  const[searchTerm,setSearchTerm] = useState('');
  return (
    <div>
      <div className="search">
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="player-list">
        {players.filter((player) => {
                if (searchTerm === "") {
                    return player;
                } else if (player.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return player;
                }
                
            }).map((player) => {
          return <div key={player.id} className="card">
            <Player player={player} />
          </div>
        })}
      </div>
    </div>
  )
}
export default Players;