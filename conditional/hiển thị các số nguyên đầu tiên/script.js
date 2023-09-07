let count = 0;
let check = 0;
let sum = 0;

// num = 10, j = 2 -> 10
for (let num = 2; count <= 20; num++) {
  // check isPrime condition
  for (let j = 2; j <= num; j++) {
    if (num % j == 0) {
      check++;
    }
  }
  //check = 1 thi num is SNT
  if (check == 1) {
    console.log("SNT: " + num);
    sum += num;
    count++;
  }
  // reset
  check = 0;
}
console.log("SUM: " + sum);