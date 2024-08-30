// let obj2=obj1;// here only the reference is copied

// console.log(typeof(obj2));//object 
// obj2.class= 12;//chnaging the value of class in obj2
// console.log(obj1);
// console.log(obj2);


//shallow copy
// obj1={

//     name:"sibrah",
//     class:11,
    
//     }

// let obj2= {...obj1};//shalllow copy

// console.log(obj1);
// obj2.name="Zarina";
// console.log(obj2)


// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     social:{
//         twitter:{
//             acc1: "sibrahgul@gmail.com",
//             acc2: "sibrahgul@gmail.com"
//         },
//         instagram:{
//             acc1: "sibrahgul@gmail.com",
//             acc2: "sibrahgul@gmail.com"
//         }
//     }
// }

// let c= JSON.parse(JSON.stringify(obj));
// console.log(c);
// let a = JSON.parse(JSON.stringify(obj));
// console.log(a);
// a.social.twitter.acc1="chnaged";
// console.log(a);



function factorial(n){
    let result= 1;
    for(let i=1; i<=n;i++){
        result= i*result
    }
    return result
}
console.log(factorial(4));





