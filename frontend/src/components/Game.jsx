import React, { useState } from 'react'
import Board from './tictactoe/Board'

const Game = ({channel}) => {
    const [joinedPlayers, setJoinedPlayers] = useState(channel.state.watcher_count === 2)

    const [result, setResult] = useState({winner: "none", state: "none"})

    channel.on("user.watching.start", (event) => {
        setJoinedPlayers(event.watcher_count === 2)
    })
    
    if(!joinedPlayers) {
        return ( <div>waiting for other player to join</div>)
    }
  return (
    <div className='gameContainer'>
        <Board result={result} setResult={setResult}/>
        {/* Chat */}
        {/* Leave game btn */}
    </div>
  )
}

export default Game