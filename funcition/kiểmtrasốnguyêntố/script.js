let count = 0;
let check = 0;
let sum = 0;

function isPrime(number) {
    for (let num = 2; count <= 1000; num++) {
        // check isPrime condition
        for (let j = 2; j <= num; j++) {
          if (num % j == 0) {
            check++;
          }
        }
        //check = 1 thi num is SNT
       const primes = [];
        if (check == 1) {
          primes.push(num);
          count++;
        }
        // reset
        check = 0;
        ;
      }console.log(primes)
    } 
  
  
