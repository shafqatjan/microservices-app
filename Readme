# Microservices App

## Description
This is a simple application with two microservices that communicate via a message bus.

## Installation
1. Clone the repository: `git clone https://github.com/yourusername/microservices-app.git`
2. Navigate to the 'users' service directory and install dependencies: `cd users && npm install`
3. Repeat step 2 for the 'notifications' service.
4. Run a RabbitMQ server in a Docker container: `docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management`

## Usage
1. Start the 'users' service: `cd users && npm start`
2. In a new terminal window, start the 'notifications' service: `cd notifications && npm start`
3. You can now send a POST request to `localhost:3000/users` to create a new user.

## Running the tests
To run the tests, navigate to each service directory and run `npm test`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
