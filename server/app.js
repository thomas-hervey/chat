const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8989 }) // create a new web socket server

const users = []

// broadcast an event to all the connected clients
const broadcast = (data, wss) => {
  wss.clients.forEach(client => {
    // if client state's ready state is open, and it doesn't equal the web socket
    if (client.readState === WebSocket.OPEN && client !== wss) {
      client.send(JSON.stringify(data))
    }
  })
}

// on web socket server connection, pass in a web socket
// as soon as a client connects, we will start listening
// for the methods below (add user; add message)
wss.on('connection', (ws) => {
  let index
  // when the web socket receives a message
  ws.on('message', message => {
    // parse the message
    const data = JSON.parse(message)
    // depending on the message, do the according action
    switch (data.type) {
      case 'ADD_USER':
        index = users.length // get index
        users.push({ name: data.name, id: index + 1 }) // add user
        ws.send(JSON.stringify({ // send the user list
          type: 'USERS_LIST',
          users
        }))
        broadcast({ // broadcase the update
          type: 'USERS_LIST',
          users
        }, ws)
        break

      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break

      default:
        break;
    }
  })

  // when the web socket closes
  ws.on('close', () => {
    users.splice(index, 1) // remove the current user from the user list
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
})

