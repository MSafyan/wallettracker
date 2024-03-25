const tryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (e) {
    next(e); // Pass the error to Express's error handling middleware
  }
};

module.exports = {
  tryCatch,
};
