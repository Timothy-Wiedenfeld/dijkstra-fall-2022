// Convert kebab case words into camel casing. The first word within the output should be capitalized only if it is the first letter of a word and dashes should be removed.

// * change-this-word gets converted into changeThisWord
// *day-month-year gets converted into dayMonthYear
// *ALL-CAPs gets converted into allCaps

function kababToCamel(string){
    //string.toLowerCase(); - why doesn't this work?
let splitString = string.split("-");
    //removes the dashes in the string and turns the string into an array
let capital = splitString.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase()); 
    //run through the chars in the array and capitalize index 0 and lower case the rest
let capitalString = capital.join(""); 
    //joins the array into a string
console.log(capitalString);
}
kababToCamel("change-this-word");
kababToCamel("day-month-year");
kababToCamel("ALL-CAPs");

//RANDOM KNOWLAGE CHECK
//const. Const you have to declare becasuse it has to have a variable. You can not change const.
//let and var are the same thing but let is newer. let you can change later

//THINKING THROUGH THE PROBLEM BEFORE ATTEMPTING PROBLEM
//function kababToCamel(kababString){
    //let camelString; //const. Const you have to declare becasuse it has to have a variable. You can not change const.
    //let and var are the same thing but let is newer. let you can change later
    //if char is "-" then dont use it AND capital following char test-string = testString
    //otherwise lower case and copy to camelString
    //return (camelString);
//}

//TRYING ANOTHER ATTEMPT AT TRYING TO SOLVE THE PROBLEM NOTES
// function kababToCamel(string){
// let lowerCase = string.toLowerCase();

// for(var i = 0; 0 < string.length; i++){
//   if (string.includes("-")){
//       return = " "
//       }
// }
// console.log(lowerCase)
//let splitString = string.split("-");
    //removes the dashes in the string and turns the string into an array

    //                             
//let capitalString = capital.join(""); 
    //joins the array into a string
//console.log(capitalString);
//}