const { MockServer } = require("@r35007/mock-server");

const mockServer = MockServer.Create({ root: __dirname }); // Create Mock Server instance with custom config.

const rewriter = mockServer.rewriter({ "/api/*": "/$1" }); // /api/posts -> /posts
const defaults = mockServer.defaults();
const resources = mockServer.resources("./db.json");
const homePage = mockServer.homePage();

const app = mockServer.app;

app.use(rewriter); // Make sure to use this at first, before all the resources
app.use(defaults); // Add default Middlewares.
app.use(resources.router); // Add Database
app.use(homePage); // Create the Mock Server Home Page

app.use(mockServer.pageNotFound); // Middleware to return `Page Not Found` as response if the route doesn't match
app.use(mockServer.errorHandler); // Default Error Handler

mockServer.startServer();
