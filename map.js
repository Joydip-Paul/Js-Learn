let array=[10,20,30,40,50];
let newArray = []; //empty array
let newArray2 = []; //empty array
for(let i=0;i<array.length;i++){
    let element = array[i]; // index storing
    let double = element*element; // multiply
    newArray.push(element); // push in empty array
    newArray2.push(double); // push in empty array
}
// console.log(newArray);
// console.log(newArray2);



let arr = [1,2,3,4,5];
arr.map(function square(index,ele,arr){
    // console.log(index+" -",ele,arr);
})

//es6
let age = [10,20,30,40];
const result = age.map(x =>x*x)
// console.log(result);

let fil = [1,4,2,3,5];
const even = fil.filter(x => x%2 == 0);
// console.log(even);



let sName = [];
let student = [
    {id: 90, name:'Abul Mal',age:72},
    {id: 102, name:'Aziz Ahmed',age:22},
]
for (let i = 0;i<student.length;i++){
    let nameStore = student[i].name;
    sName.push(nameStore);
}
// console.log(sName);


//Get Id
const ids = student.map(s=>s.id);
// console.log(ids);
const biggerId = student.filter(r=>r.id>100)
console.log(biggerId);