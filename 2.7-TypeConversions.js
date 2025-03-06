/* string conversions */
let value = true;
console.log(typeof value);
value = String(value);
console.log("The value is " + value);

/* Numeric Conversions Example:1*/
console.log("6" / "2"); //Value is automatically converted to Number

/*Example 2 */
let str = "123";
console.log(typeof str);

let num = Number(str);
console.log("Converted Number from string :" + num);

/* Example 3 : If not a valid number will result in NAN */
let age = Number("Jippa Jippa");
console.log(age);


/*Numeric conversion rules */
/* 
  a. Value undefined becomes NaN
  b. null becomes 0
  c. true or false becomes 1 and 0
  d. string => Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string
               is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/
console.log( Number("   123   ") ); // 123
console.log( Number("123z") );      // NaN (error reading a number at "z")
console.log( Number(true) );        // 1
console.log( Number(false) );       // 0

/* Boolean Conversion */
