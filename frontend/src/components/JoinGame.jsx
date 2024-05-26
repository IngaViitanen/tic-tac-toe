import React, { useState } from 'react'
import { Channel, useChatContext } from 'stream-chat-react'
import Game from './Game'
import CustomChatInput from './CustomChatInput'

const JoinGame = () => {
    const [rivalUsername, setRivalUsername] = useState('')
    const { client } = useChatContext()
    const [channel, setChannel] = useState(null)

    const createChannel = async () => {
        const response = await client.queryUsers({name: { $eq: rivalUsername }})

        if(response.users.length === 0) {
            alert("user not found")
            return
        }

        const newChannel = await client.channel("messaging", {
            members: [client.userID, response.users[0].id]
        })

        await newChannel.watch()
        setChannel(newChannel)
    }

  return (
    <>
    {channel ? 
    <Channel channel={channel} Input={CustomChatInput}>
        <Game channel={channel} setChannel={setChannel}/> 
    </Channel>
    : (
    <div className='joinGame'>
        <h4>Create Game</h4>
        <input type="text" placeholder='Username of rival...' onChange={(e) => {setRivalUsername(e.target.value)}} />
        <button onClick={createChannel}>Start Game</button>
    </div>
    )}
    </>
  )
}

export default JoinGame