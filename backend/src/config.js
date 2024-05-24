import dotenv from "dotenv"

dotenv.config()

const api_key = process.env.API_KEY
const api_secret = process.env.API_SECRET

export default {
    api_key,
    api_secret
}