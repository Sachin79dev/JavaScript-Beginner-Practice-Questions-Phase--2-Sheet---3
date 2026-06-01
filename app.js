// 1. You are given an array of prices.
// Print each price with `"₹"` before it.


let prices = [100, 250, 399, 499];


prices.forEach((n) => {
    console.log(`₹${n}`); 
})



// 2. You are given an array of students.
// "Pass" if marks are greater than 50
// "Fail" otherwise


let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];


students.forEach((n) => {
    if(n.marks > 50) {
        console.log(`${n.name} - Pass`);
    } else {
        console.log(`${n.name} - Fail`);
    }
})
