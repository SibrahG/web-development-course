let id1= document.getElementById("id1");
console.log(id1)
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
//console.log(id1.matches("#  id1"));
console.log(id1.closest(".box"));

let id2=document.getElementById("ID")
console.log(id2.contains(id1))