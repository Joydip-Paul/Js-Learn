// ForEach Function
const numbers = [1, 2];
numbers.forEach(callBackFun);
function callBackFun(item,index,arr) {
    console.log("index: " + index + " item = " + item);
}

// second Example
const numbers2 = [10,20,30,40,50];
let s = 0;
numbers2.forEach(item => {
    s += item;
})
console.log("SUM " + s)

// Third Example
const Name = ["Joydip", "Nayeem", "Indra", "Shohag", "Joydip", "Nayeem", "Joydip", "Joydip"];
let count = {};
Name.forEach(item => {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }
})
console.log(count);