function fizzbuzz(num) {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    if (i % 3 === 0) {
      console.log("Fizz");
    }
    if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}
fizzbuzz(100);