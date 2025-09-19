# Node.js Express TypeScript Boilerplate

## Description

This is a simple and easy-to-setup Node.js, Express.js boilerplate template. It's built with TypeScript, Node.js, Express.js, ESLint, Prettier, Husky, and more, providing a solid foundation for building robust and scalable RESTful APIs.

## Features

- **TypeScript:** Strongly typed JavaScript for enhanced code quality and maintainability.
- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
- **CORS:** Configured for Cross-Origin Resource Sharing.
- **Environment Variables:** Uses `dotenv` for managing environment-specific configurations.
- **ESLint:** Pluggable JavaScript linter for identifying and reporting on patterns found in ECMAScript/TypeScript code.
- **Prettier:** An opinionated code formatter for consistent code style.
- **Husky:** Git hooks to ensure code quality before commits (e.g., linting and formatting).
- **Lint-Staged:** Run linters against staged git files.
- **Zod:** TypeScript-first schema declaration and validation library.
- **Global Error Handling:** Centralized error handling middleware for consistent error responses.
- **Asynchronous Error Handling:** Graceful handling of `uncaughtException` and `unhandledRejection`.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Mehedi-Hasan0/node-express-boilerplate.git
    cd node-express-boilerplate
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project based on `.env.example` (if you have one, otherwise create it with necessary variables).

    Example `.env` content:

    ```
    PORT=5000
    DATABASE_URL=mongodb://localhost:27017/your-database-name
    NODE_ENV=development
    ```

    _Note: Ensure your `DATABASE_URL` is correctly configured for your MongoDB instance._

## Running the Application

### Development Mode

To run the application in development mode with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

The server will typically run on `http://localhost:5000` (or the port specified in your `.env` file).

### Build

To compile the TypeScript code to JavaScript:

```bash
npm run build
# or
yarn build
```

This will output compiled JavaScript files to the `dist` directory.

### Start (Production)

To start the compiled application:

```bash
npm start
# or
yarn start
```

## Available Scripts

- `npm run dev`: Starts the development server with `ts-node-dev`.
- `npm run build`: Compiles TypeScript files to JavaScript.
- `npm start`: Runs the compiled JavaScript application.
- `npm run lint`: Lints `src` directory files and fixes issues.
- `npm run format`: Formats `src` directory files using Prettier.
- `npm run prepare`: Sets up Husky Git hooks.
- `npm test`: Runs tests (currently a placeholder).

## Project Structure

The `src` directory is the heart of the application, organized to promote a clean, scalable, and maintainable codebase. It follows a modular and layered architecture, separating concerns effectively.

```
src/
├── app/                  # Core application logic, including middlewares, routes, and feature modules.
│   ├── middlewares/      # Express middleware functions (e.g., global error handler, request validation).
│   ├── modules/          # Feature-based modules, each encapsulating a specific domain (e.g., 'user', 'product').
│   │   └── [feature]/    # Individual feature module (e.g., 'example').
│   │       ├── [feature].constant.ts   # Constants specific to the feature.
│   │       ├── [feature].controller.ts # Handles HTTP requests and responses for the feature.
│   │       ├── [feature].interface.ts  # TypeScript interfaces for the feature's data structures.
│   │       ├── [feature].model.ts      # Mongoose schema and model definitions for the feature.
│   │       ├── [feature].route.ts      # Defines API routes for the feature.
│   │       ├── [feature].service.ts    # Contains business logic for the feature.
│   │       ├── [feature].utils.ts      # Utility functions specific to the feature.
│   │       └── [feature].validation.ts # Zod schemas for request validation.
│   └── routes/           # Centralized route definitions, aggregating routes from all modules.
├── app.ts                # Main Express application setup, configuring middleware, global routes, and error handling.
├── config/               # Configuration files, managing environment variables and application settings.
├── enum/                 # TypeScript enumerations for defining sets of named constants.
├── errors/               # Custom error classes and utilities for consistent error handling across the application.
├── events/               # (Optional) Directory for event-driven architecture components, if implemented.
├── helpers/              # General utility functions and helper methods used across the application.
├── lib/                  # External or custom library integrations.
├── server.ts             # Application entry point, responsible for database connection, starting the server, and graceful shutdown.
├── shared/               # Shared utilities, types, and functions used by multiple parts of the application (e.g., `catchAsync`, `sendResponse`).
└── types/                # Global TypeScript custom type definitions and interfaces.
```

For a detailed explanation of the `modules` structure and how to extend it, please refer to the [Module Structure Guide](module.md).

## Error Handling

The boilerplate includes a `globalErrorHandler` middleware (`src/app/middlewares/globalErrorHandler.ts`) to centralize error management. It handles various error types, including:

- Mongoose Validation Errors
- Mongoose Cast Errors
- Zod Validation Errors
- Custom `ApiError` instances
- Generic `Error` instances
- MongoDB duplicate key errors (E11000)
- HTTP status code-based errors (e.g., Too Many Requests)

## API Endpoints

### Root Endpoint

- **GET /**: Returns a welcome message.
  ```
  http://localhost:5000/
  ```
  Response: `Welcome to Express & TypeScript Server`

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is licensed under the ISC License.

## Author

Md.Mahedi Hasan
