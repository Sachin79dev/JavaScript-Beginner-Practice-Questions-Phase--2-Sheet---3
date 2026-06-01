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


// 3. Convert all names into uppercase.

let names = ["anubhav", "rahul", "aman"];


let newNames = names.map((n) => {
    return n.toUpperCase()
})

console.log(newNames);




// 4. Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%


let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];


let discountProduct = products.map((n) => {
    return {
        ...n,
        discountPrice: n.price - (n.price * 10/100)
    } 
})

console.log(discountProduct);



// 5. Filter all even numbers.

let nums = [1,2,3,4,5,6,7,8];


let even = nums.filter((n) => n%2 == 0)


console.log(even); // (4) [2, 4, 6, 8]




// 6. Return only active users.

let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];


let trueUsers = users.filter((n) => {
    if(n.active === true) {
        return true;
    } else {
        return false;
    }
} )


console.log(trueUsers);





// 7. Find total sum of array.


let numd = [10,20,30,40]; 


let numSum = numd.reduce((n, i) => {
    return n + i;
})

console.log(numSum);




// 8. Count frequency of elements.

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];


let repeat = fruits.reduce((n, i) => {
    n[i] = (n[i] || 0) + 1

    return n;
}, {})


console.log(repeat);



// 9. Find first number greater than 50.

let numbering = [20, 35, 60, 80];


let greatest = numbering.find((n) => n > 50)

console.log(greatest);




// 10. Find a user with username "admin".

let usersAll = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];


let admin = usersAll.find((n) => {
    return n.username === "admin"
})

console.log(admin);
