const jsonServer = require('json-server')
const server = jsonServer.create()
let cors=require("cors")
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
let port=process.env.PORT||8080
server.use(cors)
server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})