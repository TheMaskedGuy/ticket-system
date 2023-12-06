# NestJS App with Prisma, Postgres, and Docker

This is a sample NestJS application that demonstrates how to use Prisma, Postgres, and Docker to handle user feedback, tickets, and FAQs.

## Prerequisites

Make sure you have the following software installed on your machine:

- Node.js
- npm (Node Package Manager)
- Docker
- Docker Compose

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TheMaskedGuy/ticket-system.git
   ```

2. Navigate to the project directory

3. Start the application!
  ```bash  
  npm run start:dev
  ```

4. Open your browser / API testing client and goto `http://localhost:3000`.

## Usage

The application provides the following endpoints:

- `/feedback`: Create a new feedback entry.
- `/tickets`: Create a new support ticket.
- `/faqs`: Retrieve a list of frequently asked questions.

## Configuration

The application can be configured using the following environment variables:

- `DATABASE_URL`: The URL of the Postgres database.

## License

Free to use.
