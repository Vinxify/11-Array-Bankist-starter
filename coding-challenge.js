'use strict ';

// Julia data [3, 5,2, 12, 7] Kate [4,1,15,8,3]
// test data 2 Julia data [ 9, 16, 6, 8, 3] kate [10,5,6,1,4]

// const Jarr = [3, 5, 2, 12, 7];
// const Jarr2 = [9, 16, 6, 8, 3];
// const Karr = [4, 1, 15, 8, 3];
// const Karr2 = [10, 5, 6, 1, 4];
// console.log(Jarr.slice(1, -2));

// const shallowCopy = function (name) {
//   const result = name.slice(1, -2);
//   console.log(result);
// };
// shallowCopy(Jarr);
// shallowCopy(Jarr2);

// const arr1 = [...Jarr.slice(1, -2), ...Karr];
// const arr2 = [...Jarr2.slice(1, -2), ...Karr2];
// console.log(arr1);
// console.log(arr2);

// arr1.forEach(function (mov, num) {
//   mov =
//     mov > 3
//       ? console.log(`Dog number ${num + 1} and is ${mov}
//   years old `)
//       : console.log(`Dog number ${num + 1} is still a puppy🐶`);

//   // if (mov <= 3) {
//   //   console.log(` Dog number ${num + 1} is still a puppy🐶`);
//   // } else {
//   //   console.log(`Dog number ${num + 1} and is ${mov}
//   //    years old, he is and alpha dog 🐕`);
//   // }
// });

// arr2.forEach(function (isreal, num) {
//   isreal =
//     isreal <= 3
//       ? console.log(`Dog number ${num + 1} is still a puppy🐾`)
//       : console.log(`Dog number ${num + 1} and is ${isreal} years old`);
// });

const calcAverageHumanAge = function (arr1, arr2) {
  const totalArr = [...arr1, ...arr2];
  const humanAge1 = totalArr.filter(acc => acc <= 2).map(acc => acc * 2);
  console.log(humanAge1);
  const humanAge2 = totalArr.filter(acc => acc > 2).map(acc => 16 + acc * 4);
  // console.log(totalArr);
  console.log(humanAge2);
  const totalArr2 = [...humanAge1, ...humanAge2];
  // console.log(totalArr2);
  const excluding = totalArr2.filter(acc => acc >= 18);
  let adder = 0;
  excluding.forEach(function (cur) {
    adder += cur;
  });
  let divider = adder / excluding.length;
  console.log(divider);

  // console.log(excluding);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3], [16, 6, 10, 5, 6, 1, 4]);
