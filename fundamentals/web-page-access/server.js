import { get } from 'node:http'

get('http://www.google.com', (response) => {
    response.on('data', (message) => {
        console.log(message.toString())
    })
})