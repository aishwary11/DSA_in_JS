const patternStar = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log("*".repeat(i));
  }
};
patternStar(5);
const patternNo = (num) => {
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
};
patternNo(5);