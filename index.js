const express = require('express')
const app = express()
const port = 4000
const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

app.use(cors())

// socket io
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get('/', (req,res) => {
    res.json({
        message: 'Hello world'
    })
})

http.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
