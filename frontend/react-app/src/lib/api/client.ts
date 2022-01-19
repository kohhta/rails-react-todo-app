import axios from "axios"

// api: apiを叩くための関数をまとめた場所
// axios経由でroot_pathはこれだよ みたなことしてる

const client = axios.create({
  baseURL: "http://localhost:3001/api/v1"
})

export default client
