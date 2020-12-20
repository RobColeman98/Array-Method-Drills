//every method
const oldEnough = [21, 25, 23, 21, 22, 24];
const notOldEnough = [21, 25, 23, 21, 17, 24];

let is21OrOver = (age) => {
    return age >= 21;
}

//console.log(oldEnough.every(is21OrOver)); // true
  console.log(notOldEnough.every(is21OrOver)); // false
//every is used to test wether an array passes a specific test using a function


//filter method
const nums = [1,4,6,22,30,5,100,9]

// const evens = nums.filter((i) => {
//     return i % 2 == 0
// })
// console.log(evens)

const odds = nums.filter((i) => {
    return i % 2 == 1
})
//in order to get odd, you will have to do i % 2 == 1!
console.log(odds)
//.filter also creates a new array with the items that passes the "filter" test.


//forEach method
const randomThings = ["Anime", "Gaming", "Self-Motivation", "Sports"]

randomThings.forEach((randomThings, i) => {
    console.log(`The item at i ${i} is ${randomThings}`)
})
//this can be used instead of a for Loop in an array. You are running a callback "for each" item in an array


//indexof
const nums = [1,2,3,2,4,5]
const has2 = nums.indexOf(2) 
const has2Twice = nums.indexOf(2,2)
const has15 = nums.indexOf(15)

console.log(has2);// 2 is located at i of 1
console.log(has2Twice);// the second 2 is located at the index of 3
console.log(has15);// -1 because there is no element of 15 in the array
//indexof is used to determine the first index a element exists in an array


//lastindexof
const nums = [1,2,3,2,4,5]
const has2 = nums.lastIndexOf(2) 
const has2Twice = nums.lastIndexOf(2,2)
const has15 = nums.lastIndexOf(15)

console.log(has2);// the last 2 is located at index of 3
console.log(has2Twice);
console.log(has15);//still -1 because there isn't an element of 15 in the array
//Unlike it's counterpart, lastindexof is used to determine the last index a element exists in an array.


//map method
const diffNums = [1,4,3,6,7]
const doubles = diffNums.map((diffNums) => {
    return diffNums * 2
})
console.log(doubles)
//map affects EVERY element in the function & returns a new array with the returned value


//reduce method
const nums = [1,2,3,4,5]
const sum = (a,b) => {
    return a + b;
}
console.log(nums.reduce(sum))
console.log(nums.reduce(sum,3))
// adds all of the elements together to get the value of the "sum" function & you can all the result of "sum" with another element

const users = [
    {firstName: "Robert", lastName: "Coleman" },
    {firstName: "Paul", lastName: "Sandusky" },
    {firstName: "Crash", lastName: "Bandicoot" },
    {firstName: "Heath", lastName: "Ledger" },
];

console.log(
    users.reduce((names,users) => {
        return names.concat(`${users.firstName} ${users.lastName}`)
    }, [])
);
// although can be a bit complicated and confusing, .reduce can also be used with a list of objects with properties!


//reduce right
const users = [
    {firstName: "Robert", lastName: "Coleman" },
    {firstName: "Paul", lastName: "Sandusky" },
    {firstName: "Crash", lastName: "Bandicoot" },
    {firstName: "Heath", lastName: "Ledger" },
];

console.log(
    users.reduceRight((names,users) => {
        return names.concat(`${users.firstName} ${users.lastName}`)
    }, [])
);
// the same as .reduce execpt the array is called in right to left order!



