//closure
function fun(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let result = fun();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

let result2 = fun();
// console.log(result2());
// console.log(result2());
// console.log(result2());
// console.log(result2());

//slice splice join
let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = arr.slice(2,7);
console.log(`After slice `+newArr);

let newArr2 = arr.splice(2,7);
console.log(`After Splice `+newArr2);

let addArr = arr.join("  ");
console.log(`After Join `+addArr);




const user = {name:"Joydip Paul",id:101,arr:[10,20,20]}
console.log(user);
const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFormJSON = JSON.parse(userJSON);
console.log(userFormJSON);