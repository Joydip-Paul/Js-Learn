//callBackFunction

function callBack(name,age,task){
    console.log("Hello Mr.",name);
    console.log("You are now ",age," years old");
    task();
    console.log("----------------------");
}
function forJoydip(){
    console.log("callBack for Joydip Paul");
}
function forIndrajit(){
    console.log("callBack for Indrajit Chandra");
}
function Birthday(){
    console.log("Your Birthday is in February");
}
callBack("Joydip Paul",23,forJoydip);
callBack("Indrajit Chandra",24,forIndrajit);
callBack("Nayeem Mia",25,Birthday);