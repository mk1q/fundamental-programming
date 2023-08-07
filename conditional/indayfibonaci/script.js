let num = +prompt("Nhập một số dương bất kỳ");
let n1 = 0;
let n2 = 1;

document.write(n1 + " " + n2 + " ");

while (n2 < num) {
    let n3 = n1 + n2;
    document.write(n3 + " ");
    n1 = n2;
    n2 = n3;
}