import { Router } from "express";
import fileUpload from "express-fileupload";

// Module local
import { loginHandler, registerHandler } from "../controller/init.js";
import { emailUsernameUnique, emailNotExists, } from "../middleware/emailUnique.js";

const routerAuth = Router();

routerAuth.post("/login", emailNotExists, loginHandler);

routerAuth.post(
  "/register", fileUpload({ useTempFiles: true, tempFileDir: "./temp" }), 
  emailUsernameUnique, registerHandler
);

export { routerAuth };
