/**
1. Print all numbers from 1 to 10.

2. Check if a number is even or odd.

3. Find the sum of all numbers in an array.

4. Reverse a string ("hooriya" → "ayirooh").

5. Find the maximum number in an array.

6. Count vowels in a string.

7. Convert temperature from Celsius to Fahrenheit.

8. Create a function that takes a name and says "Hello, <name>!".

9. Multiply all numbers in an array.

10. Check if a word is a palindrome ("madam" → true).
*/

//solution 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//solution 2
const checkEvenOrOdd = (num) => {
  if (num % 2 === 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
};
checkEvenOrOdd(4);
checkEvenOrOdd(5);

//solution 3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((elem, index) => {
  let num = 0;
  num += elem
  console.log(num)

})

// solution 4 
const reverseString = (str) => {
  const str2 = str.reverseString()
  return str2
}

console.log(reverseString("hooriya"))