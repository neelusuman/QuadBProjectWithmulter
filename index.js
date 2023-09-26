const {serverPort} = require('./config/server.config')
const express = require('express')
const { Users,sequelize } = require('./models')
const {userRoutes} = require('./routes')

const app = express()

app.use(express.json())
app.use('/Images', express.static('./images'))

app.use(userRoutes)

app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await sequelize.authenticate()
})

