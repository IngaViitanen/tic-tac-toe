import React, { useState } from 'react'
import "./Chat.css"
import Board from './tictactoe/Board'
import { Window, MessageList, MessageInput } from 'stream-chat-react'

const Game = ({channel, setChannel}) => {
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
        <Window>
            <MessageList disableDateSeparator closeReactionSelectorOnClick messageActions={["react"]}/>
            <MessageInput noFiles />
        </Window>
        <button onClick={async () => {
            await channel.stopWatching()
            setChannel(null)
        }}>Leave Game</button>
    </div>
  )
}

export default Game