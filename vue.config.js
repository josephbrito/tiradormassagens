module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/docs/1.0/" // This is whatever your path from the root is
      : "/",
};
