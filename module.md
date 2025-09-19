# Module Structure

This boilerplate adopts a feature-based modular structure, where all related components for a specific feature (e.g., `example`) are grouped within their own directory under `src/app/modules`. This approach promotes:

- **Separation of Concerns:** Each module focuses on a single feature, making the codebase easier to understand and manage.
- **Scalability:** New features can be added as independent modules without affecting existing ones.
- **Maintainability:** Changes within a module are isolated, reducing the risk of unintended side effects across the application.
- **Reusability:** Components within a module can be easily reused or adapted for other features.

Each module typically contains the following files:

- `[feature].constant.ts`: Defines constants specific to the module (e.g., error messages, configuration values).
- `[feature].controller.ts`: Handles incoming HTTP requests, processes input, and sends appropriate responses. It orchestrates the interaction between routes and services.
- `[feature].interface.ts`: Declares TypeScript interfaces for data structures, request/response bodies, and other type definitions relevant to the module.
- `[feature].model.ts`: Defines the data model, typically using Mongoose for MongoDB, including schema definition and methods for database interaction.
- `[feature].route.ts`: Sets up the API endpoints for the module, mapping specific HTTP methods and paths to controller functions.
- `[feature].service.ts`: Contains the core business logic for the module, interacting with the model to perform operations and encapsulate complex processes.
- `[feature].utils.ts`: Provides utility functions that are specific to the module and can be reused across its components.
- `[feature].validation.ts`: Implements input validation using Zod, ensuring that incoming data conforms to expected schemas before processing.

### How to Extend

To add a new feature, follow these steps to create a new module:

1.  **Create a new directory** under `src/app/modules` with the name of your feature (e.g., `src/app/modules/user`).
2.  **Inside this new directory, create the standard files** following the `[feature].*.ts` naming convention (e.g., `user.constant.ts`, `user.controller.ts`, `user.interface.ts`, `user.model.ts`, `user.route.ts`, `user.service.ts`, `user.utils.ts`, `user.validation.ts`).
3.  **Implement the logic** for each file according to its purpose.
4.  **Register the new module's routes** in `src/app/routes/index.ts` to make its API endpoints accessible.
