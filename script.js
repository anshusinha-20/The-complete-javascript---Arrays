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

////////// ---------- //////////

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

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// // map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // set
// const uniqueCurrencies = new Set(["INR", "USD", "GBP", "EUR", "USD", "INR"]);
// console.log(uniqueCurrencies);

// uniqueCurrencies.forEach(function (value, _, map) {
//   console.log(value);
// });
