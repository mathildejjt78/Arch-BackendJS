 const checkAuthorization = async (handler) => {
  try {
    // Get the token from the Authorization header
    const token = handler.request.headers.authorization;

    // Verify the token
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    // If the token is invalid, return an error

    if (!decodedToken) {
      handler.set.status = 401;
      return { message: 'Invalid token!', status: 401 };
    }
    
    // If the token is valid, call the next middleware function
    await handler.next();
  } catch (error) {
    console.error(error);
    handler.set.status = 500;
    return { message: 'Unable to verify token!', status: 500 };
  }

  return handler.response;
};
