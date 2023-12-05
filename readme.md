# Scribbles
![Project Image](scribbles.png)

> Nibbles and Scribbles Email Subscription Page

---

### Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Setup and Usage](#setup)
- [License](#license)

---

## Description
Scribbles is a modern, full-stack web application designed to provide a seamless and interactive experience for users, specifically focusing on streamlining the process for email subscription. 

This project is structured with a client-server architecture, where the client side is crafted using modern web technologies to offer a user-friendly interface. 

Visitors can easily subscribe to our newsletter through this intuitive platform. On the server side, Scribbles efficiently manages data and interactions, ensuring a smooth and responsive experience for managing and storing subscriber information. 

## Features
- **Interactive UI**: The client side, built with React and Next.js, offers a dynamic and responsive user interface.
- **Efficient Data Handling**: The server side, powered by Node.js, handles data processing and storage efficiently.

## Technologies
- React - The web framework used for the client
- Next.js - Server-side rendering for React
- Node.js - The runtime for the server
- PostgreSQL - The database used
- Tailwind CSS - A utility-first CSS framework for rapid UI development

---

## Setup and Usage

#### 1. Clone the Repository
 `git clone https://github.com/amehi0index/Scribbles.git`

#### 2. Install Server Dependencies:

```
cd Scribbles/server
npm install
```

#### 3. Install Client Dependences:
```
cd Scribbles/client
npm install
```

#### 4. Set Up Environment Variables
Create a .env file in the server directory and add the necessary environment variables:

```
DB_HOST=localhost
DB_USER=your_username
DB_PORT=5432
DB_PASSWORD=your_password
DB_DATABASE=your_database
```

#### 5. Run Server:

```
cd Scribbles/server
node server.j
```

The server application should now be running on http://localhost:5000 (or another port if you've configured it differently).

#### 6. Run the Client

In a new terminal, navigate to the client directory and start the Next/React Application:

```
cd Scribbles/client
npm run dev
```

The client application should now be running on http://localhost:3000 (or another port if you've configured it differently).

---

## License

This project is licensed under the [MIT License](#LICENSE.txt)

Copyright (c) 2024 Scribbles

[Back To Top](#scribbles)

 