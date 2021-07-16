// Binary decoding
const binary = "01001000 01100101 01101100 01101100 01101111";
const split = binary.split(" ");
const parse = split.map((b) => parseInt(b, 2));
const decode = parse.map((num) => String.fromCharCode(num)).join("");
console.table(parse);
console.log(decode);
// =======================
