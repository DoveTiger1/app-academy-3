// Your code here
class ValidationError extends Error { 
  constructor(...params) {
    // Pass remaining arguments to parent constructor
    super(...params);

    // Maintains proper stack trace for where error was thrown (available on V8)
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ValidationError);
    }

    // The name property should match the class's name
    this.name = 'ValidationError';

    // Custom debugging information
    this.message = this.message || `Invalid input`;
    this.date = new Date();
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
