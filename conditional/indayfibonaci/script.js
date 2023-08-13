let num = +prompt("Nhập một số dương bất kỳ");
let n1 = 0;
let n2 = 1;

document.write(n1 + " "+ n2 + " ");

for (i=1;i <= num;i++ )  {
    let n3 = n1 + n2;
    
    document.write( n3 + " ");  
    n1=n2+1;
    n2 = n3;
}