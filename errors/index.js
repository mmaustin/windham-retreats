const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnAuthenticatedError = require("./unauthenticated");
const UnauthorizedError = require("./unauthorized");

module.exports = {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnauthorizedError
}