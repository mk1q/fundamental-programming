let n1 = 0;
let n2 = 1;
let sum = 0;

for (let i = 0; i < 20; i++) {
   let n3 = n1 + n2;


   n1 = n2;
   n2 = n3;
   sum =sum + n3;
}

console.log("Tổng của 20 số đầu fibonacci là: " + sum);
