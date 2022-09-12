import { createServer } from 'node:http'

createServer((req, res) => {
    res.end('hello world')
}).listen(12000)