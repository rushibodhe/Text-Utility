// VIMP: (refer 4.ECMA script modules.txt for details in "Node" folder)


// Calling default export:
// import ans from './module2.mjs'
// console.log(ans);

//  Calling named export:
import { a, c } from './module2.mjs'
console.log(a);
console.log(c);


/*
How export variables from one file to another:
>> Create module files with ".mjs" extensions.
>> In one module file initialize all variables. (We initialized all variables in module2.mjs)
>> Export that variables with any of following type of export.


Type of Exports:
1. Default export:
>> In this we just write "export default variableName" at the end of module in which we initialized variable. 
>> For example: 
    let b = "Rushi";
    export default b;


2. Named export:
>> In this we provide specifically who will export by using curly braces "{variableName}". 
>> [Note: In named export while importing you need to use the same variable name that you have used in module2.mjs]
>> For example: 
    let a = "Piyu";
    let b = "Rushi";
    export {a};
    export {b};


How to Import the exported variables:
1. for default export: 
>> Write this line in another module file
    import ans from './module2.mjs'
    console.log(ans).


2. for named export:
>> In named export while importing you need to use the same varibale name that you have used in module2.mjs.
>> Write this line in another module file
    import {a,b,c} from './module2.mjs'
    console.log(a)
    console.log(b)
    console.log(c)


Important notes while importing:
>> Instead of "ans" you can write anything.
>> It is very important to provide "./" before writing module file name.
>> After doing all this write node .\module1.mjs in command window which will import from another module and display in command window.
*/