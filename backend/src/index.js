import express from "express"
import cors from "cors"
import { StreamChat } from "stream-chat"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt"
import config from "./config.js"

const app = express()

app.use(cors())
app.use(express.json())


const serverClient = StreamChat.getInstance(config.api_key, config.api_secret)

app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body
        const userId = uuidv4()
        const hashedPass = await bcrypt.hash(password, 10)
        const token = serverClient.createToken(userId)
        res.json({ token, userId, firstName, lastName, username, password, hashedPass })
    } catch (error) {
        res.json(error)
    }
})
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body
        const { users } = await serverClient.queryUsers({ name: username })
        if (users.length === 0) return res.json({ message: "User not found" })
    
        const token = serverClient.createToken(userId)
        const passwordMatch = await bcrypt.compare(password, users[0].hashedPass)
    
        if (passwordMatch) {
            res.json({ token, firstName: users[0].firstName, lastName: users[0].lastName, username, userId: users[0].userId })
        }
    } catch (error) {
        res.json(error)
    }
})

app.listen(4000, () => {
    console.log('server is running on port 4000')
})