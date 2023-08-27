const numbers = [];
for (let i = 1; i <= 5; i++) {
  let number = +prompt("Nhập vào từng số : ");
  console.log("Enter number " + i + ":" + number);
  numbers.push(number);
}



console.log(numbers);
let numberlength = numbers.length;
console.log("Lenght :" + numberlength);



let sum = 0;
for (let i = 0; i < numberlength; i++) {
  sum += numbers[i];
}
console.log("Sum :" + sum);



let max = numbers[0];
for (let j = 1; j < numberlength; j++) {
  if (numbers[j] > max) {
    max = numbers[j];
  }
  console.log("Max :" + max);
}



let min = numbers[0];
for (let j = 1; j < numberlength; j++) {
  if (numbers[j] < min) {
    min = numbers[j];
  }
}
console.log("Min :" + min);



let newnumber = +prompt("Nhập số thêm mới");
numbers.push(newnumber);
console.log(" Updated array (after adding a new number) : " + numbers);



console.log (numbers.pop());
console.log( " array sau khi da xoa :" + numbers );



numbers.sort();
let a = numbers.join(",");
console.log("sap xep : " + a);

let check = +prompt ("Nhập số muốn kiếm tra")
for (let i = 0; i < numbers.length; i++){
if (numbers[i] == check) {
  console.log("Số " + numbers[i] + " có trong dãy và đứng tại vị trí số " + i);
} else if (check ==! numbers[i]) { }
 console.log("khong tim thay" )

}