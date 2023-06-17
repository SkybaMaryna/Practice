// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//  sum += i;
//     }
//     return sum;
//   // Change code above this line
// }

// console.log(calculateTotal(1))

// function includes(array, value) {
//   // Change code below this line
  
//   for (let i = 0; i < array.length; i +=1) {
//     if (value == array[i]) {
//       return true;
//     }
//     return false;
//   }
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3))

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const PropValues = [];

// for (const product of products) {
//   PropValues.push(product[propName]);
// }
// return PropValues;
//   // Change code above this line
// }

// console.log(getAllPropValues('category'))

// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i +=1) {
//      if (this.potions[i].name === potionName) {
//        this.potions.splice(i, 1);
//       }
//     }
// return `Potion ${potionName} is not in inventory!`;
//   },


//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
 
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))

// const classTutor = {
// 	students: [
// 		{ name: 'kriss', grades: { math: 9, geography: 10, physics: 7 } },
// 		{ name: 'jane', grades: { math: 6, geography: 10, physics: 7 } },
// 		{ name: 'alex', grades: { math: 9, geography: 4, physics: 7 } },
// 		{ name: 'gregory', grades: { math: 12, geography: 12, physics: 12 } },
// 		{ name: 'steve', grades: { math: 11, geography: 8, physics: 6 } },
// 		{ name: 'julia', grades: { math: 4, geography: 9, physics: 6 } }
// 	],

// 	//Написати функцію,яка буде повертати масив всіх студентів
// 	getStudents() {
// 		return this.students;
// 	},
// 	//Написати функцію,яка буде додавати студета до класу
// 	addStudent(name, math, geography, physics) {
// 		this.students.push({ name, grades: { math, geography, physics } });
// 	},
// 	//Написати функцію,яка буде повертати середню оцінку студета.Якщо студент не знайдений,то повертає 'Cтудент не знайдений'
// 	studentGrade(name) {
// 		let total = 0;

// 		for (let key of this.students) {
// 			if (key.name === name) {
// 				let digits = Object.values(key.grades);
// 				for (let fork of digits) {
// 					total += fork;
// 				}
// 				return (total / 3).toFixed(1);
// 			}
// 		}
// 		return 'Студент не знайдений';
// 	},
// 	//Написати функцію,яка буде повертати середню оцінку класу по певному предмету
//   objectGrade(object) {
//     let totalScore = 0;

//     for (let student of this.students) {
//       totalScore += student.grades[object];
//   }
//    return (totalScore / this.students.length).toFixed(1);
//   },

// 	//Написати функцію,яки порахує середню оцінку всього класу по всім предметам
//   classGrade() {
//     let totalScore = 0;
//     let totalQuantity = 0;
//     let quantity = 0;


//     for (let student of this.students) {
//       let scores = Object.values(student.grades)
      
//       for (let score of scores) {
//         totalScore += score;
//         quantity = scores.length;
//       }
//       totalQuantity += quantity;
//     }
    
//     return (totalScore / totalQuantity).toFixed(1);
//   },
// };

// console.log(classTutor.addStudent('loly', 3, 3, 5));
// console.log(classTutor.studentGrade('steve'));
// console.log(classTutor.classGrade());
// console.log(classTutor.studentGrade('kriss'));
// console.log(classTutor.objectGrade('math'));

// class Storage {

//     constructor({ items }) {
//         this.items = items
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(newItem) {
//         this.items.push(newItem)
//     }
//     removeItem(itemToRemove) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             if (this.items[i] === itemToRemove) {
//                 this.items.splice(i, 1);
//             }
//         }
//     }
// }


// // Change code above this line
// // const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// // function greet(clientName) {
// //   return `${clientName}, ласкаво просимо в «${this.service}».`;
// // }

// // const steam = {
// //   service: "Steam",
// // };
// // const steamGreeter = greet.bind(steam);
// // steamGreeter("Манго"); // "Манго, ласкаво просимо в «Steam»."

//  class BankAccount {
// 	static USD = 5;

// 	#name;

// 	constructor(name, amount) {
// 		this.#name = name;
// 		this._amount = amount;
// 	}

// 	// Створити функцію зміни величини коштів в аккаунті та повернення балансу за допомогою гетерів та сетерів
// 	get amount() {
// 		return this._amount;
// 	}

// 	set amount(value) {
// 		this._amount += value;
// 	}

// 	addMoney(value) {
// 		this._amount += value;
// 	}

// 	get name() {
// 		return this.#name;
// 	}

// 	// Додати класу курс доллара

// 	getDollars() {
// 		return this._amount / BankAccount.USD;
// 	}
// }

// const user = new BankAccount('Serhii', 10); // Создаем новый экз со всеми свойствами класса BankAccount

// console.log(user.amount);

// user.amount = -10; // 136 рядок
// console.log(user.amount);

// user.addMoney(500);

// console.log(user);

// console.log(user.getDollars());

// const user2 = new BankAccount('Max', 200); // Создаем новый экз со всеми свойствами класса BankAccount

// user2.USD = 10;
// console.log(user2.getDollars());
// console.log(user2);

// BankAccount.USD = 38; // Меняем курс доллара при помощи изменений в классе (глобально)
// console.log(user);
// console.log(user.getDollars());

// //  Second option
// user._amount += 500;
// console.log(user);

// ________________________________________________
// Налаштування
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Змініть код лише під цим рядком
//   function updateRecords(records, id, prop, value) {
//     if (value === "") {
//         delete records[id][prop];
//     } else if (prop !== "tracks" && value) {
//         records[id][prop] = value
//     } else if (prop === "tracks" && value) {
//         if (!records[id][prop]){
//             records[id][prop] = [];
//         }
//         records[id][prop].push(value)
//     }
//     return records;
//   }
  

//   console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));

// ________________________________________________
// Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < contacts.length; i++){
//     if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
//       return contacts[i][prop]
//     } else if (contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)) {  
//       return "No such property"
//     }
//   }
//   return "No such contact"

//   // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile("Akira", "address"));
// console.log(lookUpProfile("Kristian", "lastName"));

// ________________________________________________
// const max = 5;
// const min = 2;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min );

// ________________________________________________

// function countdown(n){
//   if (n < 1) {
//     return [];
//   } else {
    
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(10));

// ________________________________________________

// function rangeOfNumbers(startNum, endNum) {
//   if (startNum === endNum) {
//     return [startNum]
//   } else if (startNum - endNum === 0) {
//     return []
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }
// };

// console.log(rangeOfNumbers(1, 5));

// ________________________________________________

// function removeFirstTwo(list) {
//   // Змініть код лише під цим рядком
//   const [a,b,...shorterList] = list
//   // Змініть код лише над цим рядком
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo);

// ________________________________________________

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Змініть код лише під цим рядком
//   const failureItems = [];
//   for (let i = 0; i < result.failure.length; i++) {
//     failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
//   }
//   // Змініть код лише над цим рядком

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// console.log(failuresList);

// ________________________________________________

// let hello = "   Hello, World!  ";
// let wsRegex = /\s{2,}/; // Змініть цей рядок

// let matchRegex = hello.match(wsRegex)
// let result = hello.replace(wsRegex, ''); // Змініть цей рядок
// let trimHello = hello.trim()
// console.log(hello);
// console.log(matchRegex);
// console.log(result);
// console.log(trimHello);

// ________________________________________________

// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverseString("hello"));

// ________________________________________________

// function findLongestWordLength(str) {
//   const splitedStr = str.split(' ')
//   let maxLength = splitedStr[0].length

// for (let i = 1; i < splitedStr.length; i++){
//   maxLength < splitedStr[i].length ? maxLength = splitedStr[i].length : maxLength
// }
//   return maxLength;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// ________________________________________________

// function largestOfFour(arr) {
//   const lagestNumArr = []
//   for (let i = 0; i < arr.length; i++){
//     let maxNum = arr[i][0]
//     for (let j = 1; j < arr[i].length; j++) {
//       maxNum < arr[i][j] ? maxNum = arr[i][j] : maxNum
//     }
//     lagestNumArr.push(maxNum)
//   }
//   return lagestNumArr;
// }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// ________________________________________________

// function confirmEnding(str, target) {
//   let newStr = str.slice(-target.length)
//   return newStr === target ? true : false
// }

// console.log(confirmEnding("Bastian", "n"))

// ________________________________________________

// function repeatStringNumTimes(str, num) {
//   let repeatedStr = ''
//   if (num <= 0) repeatedStr;
// for (let i = 0; i < num; i++) {
//   repeatedStr += str
// }
//   return repeatedStr;
// }

// console.log(repeatStringNumTimes("abc", -3))

// ________________________________________________

// function truncateString(str, num) {
//   console.log(str.length);
//   if (str.length > num) {
//     const newStr = str.slice(0, num) + '...'
//     return newStr;
//   }
//   return str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))

// ________________________________________________

// function findElement(arr, func) {
//  const num = arr.find(item => func(item))
//   return num;
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))

// ________________________________________________

// function booWho(bool) {
//   return bool === true || bool === false ? true : false
// }

// console.log(booWho(null))

// ________________________________________________

// function titleCase(str) {
// const splitedStr = str.split(' ')
// return splitedStr.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
// }

// console.log(titleCase("I'm a little tea pot"))

// ________________________________________________

// function frankenSplice(arr1, arr2, n) {
//   const newArr = arr2.slice()
//   newArr.splice(n, 0, ...arr1)
//   return newArr;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// ________________________________________________

// function bouncer(arr) {
//   const newArr = [...arr].reduce((acc, item) => {
//     Boolean(item) ? acc.push(item) : acc
//     return acc
//   }, [])
//   return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]))

// ________________________________________________

// function getIndexToIns(arr, num) {
//   const sortedArr = arr.sort((a, b) => a-b)
//   if (!sortedArr.length) {
//     return 0;
//   } else if (num > sortedArr[sortedArr.length - 1]) {
//     return sortedArr.length;
//   }
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (num === sortedArr[i]) {
//       return i
//     } else if (num > sortedArr[i] && num < sortedArr[i + 1]) {
//     return i + 1
//   }
// }
// }

// console.log(getIndexToIns([40, 70, 90], 40))

// ________________________________________________

// function mutation(arr) {
//  const splitedItem = arr[1].toLowerCase().split('')
//  return splitedItem.every((letter) => arr[0].toLowerCase().includes(letter))
// }

// console.log(mutation(["hello", "hey"]))

// ________________________________________________

function chunkArrayInGroups(arr, size) {
let newArr = []
  for (let i = 0; i < arr.length; i += size){
    newArr.push(arr.slice(i, i + size))
  }
  return newArr
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))