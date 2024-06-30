///////////////// Question 01 //////////////////////

// const arr = [1, 2, 3, 4, 5];
// arr.map((e) => {
//     console.log(e**2);
// })

///////////////////// Question 02 ////////////////////////////

// let score = 70;

// const grade = (score>=70 && score<=100) ? (console.log("Grade : A")) :
// ( (score<70 && score>=50) ? console.log("Grade : B") :
// ( (score<50 && score>=40) ? console.log("Grade : C") :
// ( (score<40 && score>=30) ? console.log("Grade : D") : (console.log("Grade : F")) ) ) );

///////////////////////////// Question 03 //////////////////////////

// const Cars = {
//   CompanyName : "BMW",
//   Model : "BMW iX7",
//   Year : "2022",
// };
// const Cars2 = {...Cars, Year : "2021"}
// console.log(Cars2.Year, Cars2.Model);

///////////////////////////// Question 04 ///////////////////////////

// const array = [1, 4, 2, 6, 8, 3, 5, 9];

// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const filterd = array.filter(isPrime);
// console.log(filterd);

/////////////////////////// Question 05 ////////////////////////////

// let arrmap = [1,2,3,4,5];

// // map //
// let arrmap2 = arrmap.map((e) => {
//     return e**2;
// })
// console.log(arrmap2);

// // filter //
// let arrfill = arrmap.filter((e) => {
//     return e > 2;
// })
// console.log(arrfill);

// // reduce //
// function add(a ,b){
//     return a+b;
// }
// let arredu = arrmap.reduce(add)
// console.log(arredu);



///////////////////// Question 06 //////////////////////////

// async function fetchData() {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   try {
//     const response = await fetch(url);

//     const data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchData();



///////////////////// Question 07 //////////////////////////

// const person = {
//     name: "John Doe",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         postalCode: "12345"
//     },
//     contact: {
//         email: "johndoe@example.com",
//         phone: "555-1234"
//     }
// };
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber)

// const personWithoutContact = {
//     name: "Jane Doe",
//     address: {
//         street: "456 Elm St",
//         city: "Othertown",
//         state: "NY",
//         postalCode: "67890"
//     }
// };
// const phoneNumberMissingContact = personWithoutContact.contact?.phone;
// console.log(phoneNumberMissingContact);
