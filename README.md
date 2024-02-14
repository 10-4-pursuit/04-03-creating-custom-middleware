
### Exercise: Creating Conditional Middleware in Express

#### Objective
Develop an Express server that incorporates custom middleware to demonstrate conditional flow within the middleware stack. This exercise aims to expose students to the concept of controlling the execution chain based on certain conditions, such as validating request data.

#### Requirements

1. **Project Setup:**
   - Initialize a new Node.js project and install Express.
   - Create an `index.js` file to hold your Express app logic.
   - Create a `server.js` file to import your Express app and run your server (by listening)

2. **Middleware Implementation:**
   - Write a custom middleware function named `validateRequestData`.
   - This middleware should check for a specific property in the request body (e.g., `isValid` boolean flag).
   - If the property meets your condition (e.g., `isValid` is `true`), the middleware allows the request to proceed to the next handler.
   - If the condition is not met, the middleware should respond with a status code `400` and a message indicating invalid request data. [Hint](http://expressjs.com/en/4x/api.html#res.status)

3. **Setup Routes:**
   - Implement a POST route `/validate-data` that uses your `validateRequestData` middleware.
   - If the request passes the middleware validation, respond with a status code `200` and a message indicating the data is valid.

4. **Server Configuration:**
   - Configure your server to listen on port 3000.

#### End Cases
- The server runs successfully without errors on port 3000.
- Making a POST request to `/validate-data` with `{ "isValid": true }` in the body proceeds past the middleware and receives a `200` status response indicating valid data.
- Making a POST request to `/validate-data` without the `isValid` property or with `{ "isValid": false }` results in a `400` status response indicating invalid request data.

### Running the Tests

1. **Install Requirements**
   - We have to start with installing our test packages as development dependencies
   - The packages we want to use are `jest` and `supertest`
   - We can install packages as dev dependencies by including a `--save-dev` flag when running the install command (like `npm i --save-dev <your packages>`)
   - With this information, what would the command to install `jest` and `supertest` as dev dependencies look like?
2. **Update the package.json scripts**
   - If you've done things right, you should have a package.json file in your project with `express` and `cors` as dependencies, and `jest` and `supertest` as dev dependencies.
   - In the scripts section of the package.json, we want to update our test script to run `jest` instead of the default `echo whatever and all that`
3. **Run the tests**
   - From here, if all has gone well, you can run the tests by running `npm test`
4. **Validate Correctness**
   - Make sure that the tests pass, examine each test case and ensure that everything is passing, and if not, that you understand the errors that are happening and have a sense of how to fix it

### Experiment
- Test your endpoint with various payloads to see how your middleware affects the flow of request handling.
- Try adding more conditions or checks to your middleware for additional validation.

### Submission Guidelines
- Push your completed project to a GitHub repository.
- Ensure your `package.json` includes Express as a dependency.
- Submit the URL to your GitHub repository.
