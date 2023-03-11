"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

////////// displays the movements of amounts //////////

// this function takes the movements array
const displayMovements = function (movements) {
  // dom manipulation where initially the html is set to empty
  containerMovements.innerHTML = "";
  // this forEach function loops through the movements array
  movements.forEach(function (move, i) {
    // stores the type of the amount
    const type = move > 0 ? "deposit" : "withdrawal";
    // stores the updated html
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">₹ ${move}</div>
      </div>
    `;
    // dom manipulation to update the inner html
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// function is called
displayMovements(account1.movements);

////////// ---------- //////////

////////// sets the username for different account owners //////////

const userNames = accounts.map((account) => {
  let fullNameArr = account.owner.split(" ");
  let userName = "";
  fullNameArr.forEach(function (name) {
    userName += name[0].toLowerCase();
  });
  return userName;
});

console.log(userNames);

////////// ---------- //////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

// // 142. simple array methods

// // slice method - doesn't mutate the original array
// const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(2));
// console.log(arr1.slice(-2));
// console.log(arr1.slice());
// console.log([...arr1]);

// // splice method - mutates the original array
// console.log(arr1.splice(-1)); // removes the last element
// console.log(arr1.splice(2));
// console.log(arr1);

// // reverse method - reverses the original array
// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.reverse());

// // concat method - concatenates the passed array to the original array
// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]); // similar method like concat

// // join method
// console.log(arr2.join(" - "));

/////

// 143. the new at method

// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3.at(0)); // gives the element present at the provided index
// console.log(arr3.at(-1));

/////

// 144. loooing arrays: forEach
// console.log("---for loop---");
// const arr4 = [1, 2, 3, 4, 5];
// for (let [i, ele] of arr4.entries()) {
//   console.log(`${i + 1} : ${ele}`);
// }

// console.log("---forEach loop---");

// arr4.forEach(function (ele, i) {
//   console.log(`${i + 1} : ${ele}`);
// });

/////

// 145. forEach with maps and sets

// // map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // set
// const uniqueCurrencies = new Set(["INR", "USD", "GBP", "EUR", "USD", "INR"]);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, map) {
//   console.log(value);
// });

/////

// 148. Coding challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀

// const checkDogs = function (dogsJulia, dogsKate) {
//   const newJuliaData = dogsJulia.slice(1, -2);

//   const dataArr = [newJuliaData, dogsKate];

//   for (let i of dataArr) {
//     i.forEach(function (age, i) {
//       const type =
//         age >= 3
//           ? `Dog number ${i + 1} is an adult, and is ${age} years old`
//           : `Dog number ${i + 1} is still a puppy 🐶`;

//       console.log(type);
//     });

//     console.log("- - - - -");
//   }
// };

// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];

// checkDogs(juliaData, kateData);

/////

// // 150. the map method

// const arr5 = [1, 2, 3, 4, 5];
// // const arr6 = arr5.map(function (i) {
// //   return 2 * i;
// // });

// const arr6 = arr5.map((i) => 2 * i);

// console.log(arr5);
// console.log(arr6);

// const arr7 = arr6.map((i) => {
//   const type = i > 5 ? "yes" : "no";
//   return type;
// });

// console.log(arr7);
