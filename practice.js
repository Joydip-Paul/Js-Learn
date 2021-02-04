function getFullName(firstName,lastName){
    // console.log(arguments);
    // let fullName = firstName + ' ' + lastName;
    // return fullName;
    let fullName = '';
    for(let i=0; i<arguments.length;i++){
        let namePart = arguments[i];
        fullName = fullName+ ' ' +namePart;
    }
    return fullName;
}
var name = getFullName('Joydip','Paul','Jishu');
// console.log(name);