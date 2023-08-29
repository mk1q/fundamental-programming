const numbers = [];
for (let i = 1; i <= 5; i++) {
  let number = +prompt("Nhập vào từng số : ");
  console.log("Enter number " + i + ":" + number);
  numbers.push(number);
}

console.log(numbers);
let numberlength = numbers.length;
console.log("Lenght :" + numberlength);

let sum = numbers[0];
let max = numbers[0];
let min = numbers[0];

for (let j = 1; j < numberlength; j++) {
  if (numbers[j] > max) {
    max = numbers[j];
  }
  if (numbers[j] < min) {
    min = numbers[j];
  }
  sum += numbers[i];
}

console.log("Sum :" + sum);
console.log("Max :" + max);
console.log("Min :" + min);

let newnumber = +prompt("Nhập số thêm mới");
numbers.unshift(newnumber);
console.log(" Updated array (after adding a new number) : " + numbers);

numbers.pop();
console.log(" array sau khi da xoa :" + numbers);

numbers.sort((a, b) => a - b);
let a = numbers.join(",");
console.log("sap xep : " + a);

let check = +prompt("Nhập số muốn kiếm tra");

let index = -1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == check) {
    index = i;
    break;
  }
}

if (index == -1) {
  console.log("khong tim thay");
} else {
  console.log(
    "Số " + numbers[index] + " có trong dãy và đứng tại vị trí số " + index
  );
}
