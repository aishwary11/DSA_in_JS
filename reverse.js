const reverseInt = (num) => parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reverseInt(-1234));

const str = "hello world";
const captializeStr = (str) => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(captializeStr(str));