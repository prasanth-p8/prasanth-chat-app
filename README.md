# React Chat Application

This is a simple chat application built with React.js. The application allows users to send and display messages. Each message is randomly assigned a username from a predefined list, and users can like messages and can send emoji in their chat messages.

## Features

- Send and display messages
- Randomly assigned usernames for each message
- Like button for each message to count likes
- Mentions feature to mention users in messages
- Send Emoji using react emoji picker

## Demo

Check out the live demo of the application: [Live Demo](https://prasanth-chat-app.vercel.app/)

## Installation

### Prerequisites

- Node.js and npm installed on your machine

### Frontend Setup

1. Clone the repository and navigate to the project directory:

   ```sh
   git clone https://github.com/prasanth-p8/prasanth-chat-app
   cd prasanth-chat-app
   ```

2. Install the necessary dependencies:

   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the chat application.
- Type your message in the input box and press the "Send" button or hit the "Enter" key to send the message.
- Messages will appear in the chat window with a randomly assigned username.
- Click the "Like" button next to a message to increase its like count.
- Type `@` in the message input to mention a user from the list.

## Code Overview

### Frontend (`src/App.js`)

- A React component that handles the chat interface.
- Manages the state for messages and the input message.
- Handles sending messages and liking messages.
- Includes the `MentionsInput` component from `react-mentions` for user mentions.
- Includes the `Picker` component from `emoji-picker-react` for sending emoji's.

### Frontend (`src/App.css`)

- Contains basic styling for the chat application interface.

### Frontend (`src/mentionsStyle.js`)

- Contains styling for the `MentionsInput` component to display mention user list.

## Dependencies

- react
- react-dom
- react-mentions
- react-bootstrap
- date-fns
- emoji-picker-react
- react-icons

## Contributing

If you wish to contribute to the project, feel free to fork the repository and submit a pull request.
