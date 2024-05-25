import React, { useState } from 'react'

const Game = ({channel}) => {
    const [joinedPlayers, setJoinedPlayers] = useState(channel.state.watcher_count === 2)

    channel.on("user.watching.start", (event) => {
        setJoinedPlayers(event.watcher_count === 2)
    })
    if(!joinedPlayers) {
        return ( <div>waiting for other player to join</div>)
    }
  return (
    <div>Game</div>
  )
}

export default Game