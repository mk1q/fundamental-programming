let n1 = 0;
let n2 = 1;

document.write( " "+ n2 + " ");

for (i=1;i <= 20;i++ )  {
    let n3 = n1 + n2;
    
    document.write( n3 + " ");  
    n1=n2;
    n2 = n3;
}