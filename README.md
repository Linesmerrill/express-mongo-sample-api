# Express Mongo Sample API

This is a basic Node.js Express API. It uses MongoDB for data storage.

## Installation

1. Clone the repository:

   git clone git@github.com:Linesmerrill/express-mongo-sample-api.git

2. Install dependencies:

   cd express-mongo-sample-api
   npm install

3. Configure environment variables:

   * Create a .env file in the root directory.
   * Add your MongoDB connection string:

      MONGODB_URI=<your-mongodb-connection-string>

## Running the API

1. Start the server:

   npm start

   This will start the server on http://localhost:3000 (or the port specified in your .env file).

## API Routes

* **GET /api/releases:** Retrieves all releases.
* **GET /api/releases/:id:** Retrieves a single release by ID.
* **POST /api/releases:** Creates a new release.
* **PUT /api/releases/:id:** Updates a release by ID.
* **DELETE /api/releases/:id:** Deletes a release by ID.

    Example Usage:

    GET http://localhost:3000/api/releases

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

This project is licensed under the MIT License.
