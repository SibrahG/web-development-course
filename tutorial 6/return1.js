
//A return is a value that a function returns to the 
//calling script/execution script for ex.AddTwoNumbers(1,2) or function when
// it completes its task. 
//A return value can be any one of the four variable types: 
//handle, integer, object, or string. The type of value your 
//function returns depends largely on the task it performs.

//AddTwoNumbers: fuhnction reference or name
//() exectuion  of functgion
//let a= AddTwoNumbers(1,2);//return value comes over here when the function runs
//return rives the value of the variable on the execution point


function AddTwoNumbers(number1, number2){
    let result=number1+number2;
   // console.log(result);// will print the result varibale
     //return result;
}
AddTwoNumbers(1,2); //this function ran but didnt print
console.log(AddTwoNumbers(1,2));//this is printing