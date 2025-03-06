/* 
  SUMMARY
  We can declare variables to store data by using the var, let, or const keywords.

let – is a modern variable declaration.
var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.
*/
let admin;
let name ="Tharu" ;
admin = name;
console.log(admin);

const BIRTHDAY = '09.05.1986';
const AGE = someCode(BIRTHDAY);

function someCode(birthday) {
    // Convert the birthday string into a Date object
    const birthDate = new Date(birthday.split('.').reverse().join('-')); // Convert to YYYY-MM-DD format
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate age by subtracting the birth year from the current year
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    // Adjust the age if the birthday hasn't occurred yet this year
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  console.log(AGE);