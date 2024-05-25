import React, { useState } from 'react'
import { useChatContext } from 'stream-chat-react'

const JoinGame = () => {
    const [rivalUsername, setRivalUsername] = useState('')
    const { client } = useChatContext()
    const [channel, setChannel] = useState()

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
    {channel ? <h1>game started</h1> : (
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