import Express from "express";
import morgan from "morgan";
import cors from "cors";
import fse from "fs-extra";
import { serve, setup } from "swagger-ui-express";
import yml from "yaml"

// Module local
import { routerUser } from "./router/users.js";
import { routerRole } from "./router/role.js";
import { routerPermission } from "./router/permission.js";

const app = Express();

// Middleware
app.use(morgan("dev"));
app.use(Express.json());
app.use(cors());

// Swagger UI setup
const file = await fse.readFile("./swagger.yaml", "utf8");
const swaggerDocument = yml.parse(file)

// Routes
app.use(routerUser);
app.use(routerRole);
app.use(routerPermission);

// Swagger UI Routes
app.use("/docs", serve, setup(swaggerDocument));

export default app;
