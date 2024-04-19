import { jwtVerify } from "jose";

/**
 * Middleware to check if the user send a valid token in the Authorization header.
 * @returns {Promise<void>} next() if the token is valid else return 401 Unauthorized.
 */

const existAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "No token provided" });
  }

  // if exist remove Bearer from the token
  const removeBearer = (token) => {
    return token.includes("Bearer ") ? token.replace("Bearer ", "") : token;
  };

  try {
    const encoder = new TextEncoder(); // Transform the string into bytes
    const { payload } = await jwtVerify(
      removeBearer(authorization),
      encoder.encode(process.env.JWT_PRIVATE_KEY),
      { algorithms: ["HS256"] }
    );

    if (!payload) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Set the payload in the request
    req.payload = payload;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Timeout or invalid token" });
  }
};

export { existAuth };
