const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError { 
  constructor(difference, ...params) { 
    super(...params); 

    this.name = "MaximumLengthExceededError"; 

    this.message = "Maximum length exceeded";
    difference ? this.message += ` by ${difference}` : null;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
