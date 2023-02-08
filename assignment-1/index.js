// -------------------------------- Question 1 --------------------------------

// function that prints all the prime number betwween given numbers
const printPrimes = (start, end) => {
  for (let i = start; i <= end; i++) {
    let isPrime = true;         // Default isPrime = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;        // if number is not prime set isPrime = false
        break;
      }
    }
    if (isPrime) {
      console.log(i,`,`);       // print the prime number
    }
  }
}

// printPrimes(1, 100);

// -------------------------------- Question 2 --------------------------------

// function that prints fibonacci series till given n number
const fibonacci = (n) => {
  a=0;
  b=1;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    sum = a+b;
    console.log(sum);
    a=b;
    b=sum;
  }
}

// fibonacci(10);

// -------------------------------- Question 3 --------------------------------

const countDigits = (num) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  console.log(count);
}

// countDigits(123456827);

// -------------------------------- Question 4 --------------------------------

const reverseNumber = (num) => {
  let reversed = 0;
  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  console.log(reversed);
}

// reverseNumber(1234587866);

// -------------------------------- Question 5 --------------------------------

const shiftNumber = (number, k) => {
  // let sifted = 
  
  if (k >= 0) {
    while (k > 0){
      number = number*10;
      number = number%(Math.pow(10,Math.floor(Math.log10(number)))) + Math.floor(number/(Math.pow(10,Math.floor(Math.log10(number)))));
      k--;
    }
  } else {
    console.log(`no`);
  }
  return number;
};

console.log(shiftNumber(123456789, 4));

// -------------------------------- Question 6 --------------------------------

const factors = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      let flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        console.log(i);
      }
    }
  }
};

// console.log(factors(1440));
// -------------------------------- Question 7 --------------------------------

const printPatternRightTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

// printPatternRightTriangle(5);

// -------------------------------- Question 8 --------------------------------

const printPatternUprightRightTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n-i-1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

// printPatternUprightRightTriangle(5);

// -------------------------------- Question 8 --------------------------------

const printPatternNumberRightTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    console.log();
  }
}

// printPatternNumberRightTriangle(5);

// -------------------------------- Question 9 --------------------------------

const printPatternNumberUprightRightTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n-i+1; j++) {
      process.stdout.write(`${j}`);
    }
    console.log();
  }
}

// printPatternNumberUprightRightTriangle(5);

// -------------------------------- Question 10 --------------------------------

const printPatternPyramid = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n-i+1; j++) {
      process.stdout.write(` `);
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    if (i) {
      for (let j = 0; j < i; j++) {
        process.stdout.write("*");
      } 
    }
    console.log();
  }
}

// printPatternPyramid(5);

// -------------------------------- Question 11 --------------------------------

const printPatternUprightPyramid = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(` `);
    }
    for (let j = 0; j < n-i-1; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j <= n-i-1; j++) {
      process.stdout.write(`*`);
    }
    console.log();
  }
}

// printPatternUprightPyramid(5);