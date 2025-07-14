let str = "Tinkku"
function showMessage(name)
{
    console.log(str);
    console.log(name.substring(2,4));
    if(name == 'Rahul')
        return "Hello " + name;
    console.log("This is to show the messasge " + name);
}
showMessage('Tharu')
console.log(showMessage('Rahul'));
str = "Hello world";
showMessage('Jippa Jippa');

/* Default Values */
function sayHello(name , age = 18)
{
    console.log(`The name is ${name} and the age is ${age}`);
}

sayHello('Rozanne',4);
sayHello('Mary');

function ValidAge(name)
{
    if(name == 'Tharu')
        return 38;
    return 18;
}

/* Default Values using AnotherFunction */
function defaultValues(name, age = ValidAge(name))
{
    console.log(`The Value for Name is ${name} and age is ${age}`);
}
defaultValues('Rozanne',4);
defaultValues('Rozanne');
defaultValues('Tharu',37);

/* Function to Return Minimum of Two numbers*/
function Min(num1 , num2)
{
    if(num1 == num2)
    {
        console.log('Both Numbers are Equal');
        return;
    }
    var x = num1 > num2 ? console.log(`Then Number ${num1} is greater than ${num2}`) :   console.log(`Then Number ${num2} is greater than ${num1}`);

}
Min(12,13);

/* Function to Return Pow of Two numbers*/
function Pow(num1, num2 = 1)
{
    var pow  = 1;
    for(var i = 0 ;i < num2 ;i++)
    {
        pow *= num1;
    }
    console.log(pow);
}
Pow(3,4);
Pow(3);