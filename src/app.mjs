import http from 'http'
import { TodolistService } from './todolist-service.mjs'

const service = new TodolistService()
const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json')

  if (request.method === 'GET') {
    service.getTodoList(request, response)
  } else if (request.method === 'POST') {
    service.createTodo(request, response)
  } else if (request.method === 'PUT') {
    service.updateTodo(request, response)
  } else if (request.method === 'DELETE') {
    service.deleteTodo(request, response)
  }
}
const server = http.createServer(requestListener)

server.listen(8080)