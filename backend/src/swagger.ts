// import swaggerAutogen from "swagger-autogen";
import swaggerAutogen from "swagger-autogen";
import dotEnv from "dotenv";

dotEnv.config();
const PORT = process.env.PORT || 3000;
const host = process.env.HOST || `localhost:${PORT}`;

const doc = {
  info: {
    version: "1.0.0",
    title: "Supa Menu API",
    description:
      "Swagger API documentation for Supa Menu API",
  },
  host: `${host}`,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Auth",
      description: "Authentication routes",
    },
  ],
  securityDefinitions: {
    authToken: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Authorization token",
    },
  },
  definitions: {
  },
};


const outputFile = "../swagger-output.json";
const endpointsFiles = ["./app"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

// swaggerAutogen()(outputFile, routes, doc);
export default swaggerAutogen()(outputFile, endpointsFiles, doc)
