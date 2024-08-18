# Future-Skills

#Backend
This is a RESTful API built with Node.js and Express.js to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc.

## Features

- **Create a Card**: Add new help center cards.
- **Get All Cards**: Retrieve all help center cards.
- **Get a Specific Card**: Retrieve the details of a specific card by its title.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB instance (local or cloud-based)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/help-center-api.git
   cd help-center-api

### Indtsallation dependencies
1. npm install


### Start the server


### Frontend 

This is a React.js frontend application that interacts with the Help Center API to display help center cards. These cards provide information on different sections such as "Branches," "Manage Your Account," "Manage Billing," etc.

## Features

- Fetch and display a list of help center cards from the API.
- Display detailed information for each card.

## Tech Stack

- React.js
- Axios (for making API requests)

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- The Help Center API running on your local machine or a server

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/help-center-frontend.git
   cd help-center-frontend

### Install dependencies
    npm install

### Start the development server    
    npm run dev


Ques 1 How can you implement shared functionality across a component tree?
Ans - the Context API or custom hooks will be the most straightforward and effective solutions. HOCs and state management libraries are more suited to specific scenarios or larger projects.

Ques 2 Why is the useState hook appropriate for handling state in a complex component?
Ans - The useState hook in React is appropriate for handling state in a complex component for several reasons:
1. Simplicity and Readability
2. Isolation of State
3. Functional Updates
4. Performance Considerations
5. Handling Side Effects
6. Compatibility with Modern React Features
