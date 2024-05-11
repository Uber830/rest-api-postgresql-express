import { ZodError } from "zod";

/**
 * Error handler middleware.
 * @param {Error} err - The error object from the controller.
 * @returns {JSON} - The error object in JSON format with a code and a message.
 */

const errorHandlerMiddleware = (err, req, res, next) => {
  // Driver the error in parameters
  if (err instanceof ZodError) {
    return res
      .status(400)
      .json(err.issues.map((issues) => ({ message: issues.message })));
  }

  // Driver the error custom of the controller
  return res
    .status(err.messageErr.code)
    .json({ error: err.messageErr.err });
};

export { errorHandlerMiddleware };
