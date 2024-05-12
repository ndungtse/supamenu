import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import router from "./routes";
import swagger from "./swagger";
import swaggerFile from "../swagger-output.json";

dotEnv.config();
const app = express();
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(cors());

app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;

swagger
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
    console.error("Failed to start the server");
    process.exit(1);
  });
