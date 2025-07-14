let  sayHi = function() {
    console.log("Say Hello !!!")
}
sayHi();
let currentFunc = sayHi; //function copied as a value
currentFunc();

let funWithParam = function(name)
{
    console.log('The Name Passed down by the function is ' + name);
}

currentFunc = funWithParam //Again .. function copied as a value
currentFunc("Tharu Raju Melath");