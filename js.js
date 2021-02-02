
// Fibonacci
// function fibo(n){
//     var i;
//     var f = [0,1];
//     for (i=2;i<=n;i++){
//         f[i] = f[i-1]+f[i-2];
//     }
//     return f;
// }
// var result = fibo(10);
// console.log(result);




// let value = [5,10,53,22,16,34,29];
//         for (let i = 0; i < value.length; i++) {
//             const result = value[i];
//             // console.log(result);
//             work(result);
//         }
//         function work(result){
//             if(result % 2 == 0){
//                 console.log(result,": is a even number");
//             }
//             else{
//                 console.log(result,": is a odd number");
//             }
//         }







function btnclclick(){
    document.body.style.backgroundColor= '#000';
    document.body.style.color= '#fff';
}
const a = document.getElementById("btn");
//one way

// a.onclick=btnclclick;

//or
a.addEventListener('click',btnclclick);


document.getElementById('btn2').addEventListener('click',function(){
    document.body.style.backgroundColor='purple';
})



//delete purpose
//delete li when created in html
var items = document.getElementsByClassName('item');
for (let i = 0; i < items.length; i++) {
    const store = items[i];
    store.addEventListener('click',function(event){
        // console.log(this);
        event.target.parentNode.removeChild(event.target); //For Delete
    })
}

//addNewItem
document.getElementById('newItem').addEventListener('click',function(event){
    var parentItem = document.getElementById('pList');
    var addItem = document.createElement('li');
    addItem.innerHTML = "Bangladesh";
    parentItem.appendChild(addItem);
})
//delete after adding by javascript
document.getElementById('pList').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})