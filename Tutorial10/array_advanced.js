//Higher order array methods/function
//create a new array

//map()  creates a new array by performing 
// some operation on each array element.
//variable_name.map((parameters, index, array)=>{
//    } )




const a = [1, 2, 3];
a.map((number) => {
    console.log(value)

});
// Output: [1] ,0, [1,2,3] 


const array1 = ['sibrah', 'zoya', 'abeerah'];

function capitalize(arr) {
   return arr.map((word) => word.toUpperCase());
}

console.log(capitalize(array1)); 