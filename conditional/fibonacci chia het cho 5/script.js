let n1 = 0;
let n2 = 1;


for (i=1;i < 5;i++ )  {
    let n3 = n1 + n2;
    
    n1=n2+1;
    n2 = n3;
  if ( n3 % 5 ===0 ) {
      document.write("so chia het cho 5 dau tien la " +" " + n3);
        
    } 
}
   