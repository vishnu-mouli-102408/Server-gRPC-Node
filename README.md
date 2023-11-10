# gRPC Server Node API

## Overview

This project is a simple gRPC (Remote Procedure Call) server implemented in Node.js. It provides a basic API for communication between distributed systems using Protocol Buffers.

## Technology Stack

- **Node.js**: JavaScript runtime for server-side development.
- **gRPC**: Remote Procedure Call framework.
- **Protocol Buffers (Protobuf)**: Interface definition language for describing the structure of the data.

## Dependencies

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **gRPC**: `npm install grpc`

## Features

- Basic implementation of a gRPC server in Node.js.
- Utilizes Protocol Buffers for defining service methods and message types.

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Server-gRPC-Node.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the gRPC server:**
    ```bash
    npm start
    ```

4. **Access the gRPC API:**
    - The gRPC server will be running on the specified port (default is 50051).

5. **Explore the gRPC API!**

## Protobuf Definition

The API functionality is defined using Protocol Buffers. The `proto` directory contains the `.proto` files describing the service methods and message types.

## Configuration

Ensure to set the appropriate configuration in your code for the gRPC server.

## License

This project is licensed under the [MIT License](LICENSE).
