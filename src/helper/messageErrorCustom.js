
/**
 * Custom error messages for middleware of error handler
 * @param {String} message - The message of the error.
 * @param {Number} status - The status code of the error.
 */

class messageError {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }

  // Return the error message
  get err() {
    return this.message;
  }

  // Return the status code of the error
  get code() {
    return this.status;
  }
}

export { messageError };
