import { Router } from "express";
import fileUpload from "express-fileupload";

// Module local
import { loginHandler, registerHandler } from "../controller/init.js";
import { emailUsernameUnique, emailNotExists, } from "../middleware/emailUnique.js";
import { errorHandlerMiddleware } from "../middleware/controlMessageError.js";

const routerAuth = Router();

routerAuth.post("/login", emailNotExists, loginHandler, errorHandlerMiddleware);

routerAuth.post(
  "/register", fileUpload({ useTempFiles: true, tempFileDir: "./temp" }), 
  emailUsernameUnique, registerHandler, errorHandlerMiddleware
);

export { routerAuth };
