
// //1ST ASSIGNMENT

// This is my age
let myAge = 25;

// Ask the user to enter their age
let yourAge = prompt("Enter your age:");

// Convert the input from text to number
yourAge = Number(yourAge);

// Check who is older
if(yourAge === 0){
  alert('you have not included your age')
}
else if (yourAge > myAge) {
  console.log("You are " + (yourAge - myAge) + " years older than me.");
} else if (yourAge < myAge) {
  console.log("I am " + (myAge - yourAge) + " years older than you.");
} 
else {
  console.log("please input a valid age");
}



// 2ND ASSIGNMENT

// // Ask the user to enter their score
// let score = prompt("Enter your score:");

// // Convert the score to a number
// score = Number(score);

// // Check the score and give grade
// if (score >= 80 && score <= 100) {
//   console.log("Grade: A");
// } else if (score >= 70 && score <= 79) {
//   console.log("Grade: B");
// } else if (score >= 60 && score <= 69) {
//   console.log("Grade: C");
// } else if (score >= 50 && score <= 59) {
//   console.log("Grade: D");
// } else if (score >= 0 && score <= 49) {
//   console.log("Grade: F");

// } else if (score === ''){
//   alert('you have not included your score');
// }
//  else {
//   console.log("Invalid score");
// }




// 3RD ASSIGNMENT

// let month = prompt('Enter a month')


// month = month.toLowerCase()
// if (month === 'january'){
//   console.log('january has 31 days');
// } else if (month === 'febuary'){
//   console.log('febuary has 29 days');
// } else if (month === 'march'){
//   console.log('march has 31 days');
// } else if (month === 'april'){
//   console.log('april has 30 days');
// } else if (month === 'may'){
//   console.log('may has 31 days');
// } else if (month === 'june'){
//   console.log('june has 30 days');
// } else if (month ==='july'){
//   console.log('july has 31 days');
// } else if (month === 'august'){
//   console.log('august has 31 days');
// } else if (month === 'september'){
//   console.log('september has 30 days');
// } else if (month === 'october'){
//   console.log('october has 31 days');
// } else if (month === 'november'){
//   console.log('november has 31 days');
// } else if (month === 'december'){
//   console.log('december has 31 days');
// }
// else {
//   // alert('please enter a correct month name');
// }