const Person = require('./person');

// Your code here

class Teacher extends Person { 
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject; 
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let totalYears = 0;
    teachers.forEach(teacher => {
      totalYears += teacher.yearsOfExperience;
    });
    return totalYears;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
