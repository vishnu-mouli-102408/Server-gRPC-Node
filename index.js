const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefnition = protoLoader.loadSync("./todo.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefnition);

let todoService = protoDescriptor.TodoService;

const server = new grpc.Server();

const todos = [
  {
    id: 1,
    titke: "Todo1",
    content: "Content of todo 1",
  },
  {
    id: 2,
    titke: "Todo2",
    content: "Content of todo 2",
  },
  {
    id: 3,
    titke: "Todo3",
    content: "Content of todo 3",
  },
];

server.addService(todoService.service, {
  listTodos: (call, callback) => {
    callback(null, {
      todos: todos,
    });
  },
  createTodo: (call, callback) => {
    const incomingNewTodo = call.request;
    todos.push(incomingNewTodo);
    console.log(todos);
    callback(null, incomingNewTodo);
  },
  getTodo: (call, callback) => {
    let incomingTodoRequest = call.request;
    let todoId = incomingTodoRequest.id;
    const response = todos.filter((todo) => todo.id == todoId);
    if (response.length > 0) {
      callback(null, response);
    } else {
      callback(
        {
          message: "Todo not found",
        },
        null
      );
    }
  },
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server Started");
    server.start();
  }
);
