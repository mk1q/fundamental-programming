let n1 = 1;
let count = 0;
let sum = 0;
while (count < 30) {
  if (n1 % 7 === 0) {
    sum = sum + n1;
    count++;
    document.writeln(n1);
  }
  n1++;
}

console.log(sum);