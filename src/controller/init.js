import fs from "fs-extra";
import { SignJWT } from "jose";

import {
  loginHandlerService,
  existEmail,
  registerUser,
  saveLoginHandler,
} from "../service/init.js";
import { comparePassword, hashPassword } from "../helper/generateHas.js";
import { fileUploadCloud } from "../helper/validStructureImg.js";
import { uploadImage, deleteImage } from "../helper/cloudinary.js";
import { RegisterSchema, LoginSchema, imageSchema } from "../schemas/init.js";
import { messageError } from "../helper/messageErrorCustom.js";

/**
 * This endpoint is used to login a user
 * @returns {JSON} Returns a JSON with message and status code depending on the result of the operation.
 */

const loginHandler = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    // DTO: Login zod
    LoginSchema.parse( { email, password } );

    const getHash = await loginHandlerService(email);
    const { password: hash, id_user, username } = getHash[0];
    const { hashValid } = await comparePassword(password, hash);
    if (!hashValid) {
      res.status(401).json({ message: "Invalid password" });
    }
  
    // Save login
    const login = await saveLoginHandler(id_user);
    if (!login) {
      res.status(400).json({ message: "Error login" });
    }
    
    // Create JWT
    const jwtConstructor = new SignJWT({ id_user, username });

    const encoder = new TextEncoder(); // Transform the string into bytes
    const token = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    res.status(200).json({ result: "Login successfully", token });
  } catch (error) {
    // Control the error
    const messageErr = new messageError("Error in the server to login", 500);
    error.messageErr = messageErr;
    next(error);
  }
};

/**
 * This endpoint is used to register a new user
 * @returns {JSON} Returns a JSON with message and status code depending on the result of the operation.
 */

const registerHandler = async (req, res, next) => {
  const { username, email, password } = req.body; 
  const fileObject = req.files?.profileImage;
  
  try {
    // DTO: Validate the data of the user to register in schema.
    RegisterSchema.parse({ username, password, email });
    imageSchema.parse({ profileImage: fileObject });

    // Create hash for the user
    const { hashCreated } = await hashPassword(password);
    
    // Access img of the user
    const imgValid = fileUploadCloud(fileObject);
    if (!imgValid?.code) {
      res.status(imgValid?.status).json({ message: imgValid?.err });
    }
    
    // Upload the image to cloudinary
    const objectImg = await uploadImage(fileObject?.tempFilePath);
    const { public_id, url } = objectImg;

    // Save the user in the DB
    const newUser = await registerUser(username, public_id, url, email, hashCreated);
    if (!newUser) {
      res.status(400).json({ message: "Error creating the user" });
    }
    // //TODO: Send email to the user to validate email address and activate the account submit button

    // Delete image of local storage
    if (req?.files) await fs.unlink(fileObject?.tempFilePath);

    res.status(200).json({ result: "User created successfully" });
  } catch (error) {
    // Control the error
    const messageErr = new messageError("Error in the server to create the user", 500)
    error.messageErr = messageErr;
    next(error);
  }
};

export { loginHandler, registerHandler };
