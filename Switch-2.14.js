/* If there is no break then the execution continues with the next case without any checks.*/
let num = 2 + 6;
switch(num)
{
    case 4:
        console.log("Four");
        break;
    default:
        console.log("Default");
}
/* Rewrite the switch into an IF */
let browser = "chrome";
if(browser == "edge")
    console.log("This is Edge");
else if(browser == 'chrome' || 
        browser ==  'safari')
    console.log("Chrome or FireFox");
else 
    console.log("Any Browser!!");
 