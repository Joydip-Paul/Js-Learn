let text = "My name is Joydip Paul.";
let splitText = text.split(" ");
// console.log(splitText);
let sortText = splitText.sort(function (min, max) {
    return max.length - min.length;
})[0];
// console.log("Longest Word: " + sortText);

// Functional Way
"use strict"
function LongestWord(text) {
    return text.split(" ").sort(function (min, max) {
        return max.length - min.length;
    })[0]
}
// console.log(LongestWord("The name of my country is Bangladesh"));

// Es6
const LongestWord2 = (text) => {
    return text
        .split(" ")
    .sort((min, max) => {
        return max.length - min.length
    })[0]
}
console.log(LongestWord2("I want to be a software engineer"));