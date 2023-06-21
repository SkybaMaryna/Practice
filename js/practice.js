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

// function chunkArrayInGroups(arr, size) {
// let newArr = []
//   for (let i = 0; i < arr.length; i += size){
//     newArr.push(arr.slice(i, i + size))
//   }
//   return newArr
// }

// ________________________________________________

// Глобальна змінна
// const watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//    const filteredList = watchList.filter(({Director}) => Director === 'Christopher Nolan')
//    const rating = filteredList.reduce((acc, {imdbRating}) => acc + Number(imdbRating), 0)
//    let averageRating = rating / filteredList.length
//   // Змініть код лише над цим рядком
//   return averageRating;
// }

// console.log(getRating(watchList));

// ________________________________________________

// const squareList = arr => {
//   // Змініть код лише під цим рядком
//   const squareArr = arr.reduce((acc, num) => {
//     if (num >= 0 && !num.toString().includes('.')){
//       acc.push(num ** 2)
//     }
//     return acc
//   }, [])
//   return squareArr;
//   // Змініть код лише над цим рядком
// };
//   const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
//   console.log(squaredIntegers);

// ________________________________________________

// function splitify(str) {
//   // Змініть код лише під цим рядком
// return str.split(/\W/)

//   // Змініть код лише над цим рядком
// }

// console.log(splitify("Hello World,I-am code"))

// ________________________________________________

// Змініть код лише під цим рядком
// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// }
// // Змініть код лише над цим рядком
// console.log(urlSlug("A Mind Needs Books Like A Sword Needs  A Whetstone"))

// ________________________________________________

// function sumAll(arr) {
//    const sortedArr = arr.sort((a,b) => a-b)
//    let count = 0
//    for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
//     count += i;
//    }
//     return count;
// }
//   console.log(sumAll([5, 10]))

  // ________________________________________________

  // function diffArray(arr1, arr2) {
  //   let newArr = [];
  //     const uniqueArr1 = arr1.filter(num => !arr2.includes(num))
  //     const uniqueArr2 = arr2.filter(num => !arr1.includes(num))
  //     newArr.push(...uniqueArr1, ...uniqueArr2)
  //     return newArr;
  // }
  
  // console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]))

  // ________________________________________________

  // function destroyer(arr) {
  //   const [array, ...rest] = arguments;
  //   const filteredArr = arr.filter(item => !rest.includes(item))
  //   return filteredArr;
  // }
  
  // console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

  // ________________________________________________

  // function whatIsInAName(collection, source) {
  //   const sourceKeys = Object.keys(source)
  //   return collection.filter(obj => {
  //     for (let i = 0; i < sourceKeys.length; i++) {
  //       if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   });
  // }
  
  // console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))

  // ________________________________________________

  // function spinalCase(str) {
  //   return str.trim().split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  // }
  
  // console.log(spinalCase("thisIsSpinalTap"))

  // ________________________________________________

  // function translatePigLatin(str) {
  //   const vowels = ["a", "e", "i", "o", "u"]
  //   const splitedStr = str.split('')
  //   const isVowelsInString = vowels.some(letter => splitedStr.includes(letter))

  //   if (!isVowelsInString) {
  //     return str + "ay"
  //   }

  //   if (!vowels.includes(splitedStr[0])) {
  //     for (let i = 0; i < splitedStr.length; i++) {
  //       if (!vowels.includes(splitedStr[i])){
  //         splitedStr.push(splitedStr[i])
  //         splitedStr.shift(splitedStr[i])
  //         i--
  //       } else if (vowels.includes(splitedStr[i])){
  //         return splitedStr.join('') + "ay"
  //       }
  //     }
      
  //   } else if (vowels.includes(splitedStr[0])) {
  //     return str + "way"
  //   }
  // }
  
  // console.log(translatePigLatin("rhythm"))

 // ________________________________________________

  // function myReplace(str, before, after) {
  //   const splitedStr = str.split('')
  //   const idx = str.indexOf(before)

  //   if (before[0].toLowerCase() === before[0]) {
  //     const afterArr = after.toLowerCase().split('')
  //     splitedStr.splice(idx, before.length, ...afterArr)
  //     return splitedStr.join('')
  //   }
  //   const upperLetterAfter = after[0].toUpperCase() + after.slice(1)
  //     const afterArr = upperLetterAfter.split('')
  //     splitedStr.splice(idx, before.length, ...afterArr)
  //     return splitedStr.join('')
  // }
  
  // console.log(myReplace("I think we should look up there", "up", "Down"))

// ________________________________________________

  // function pairElement(str) {
  //   const splitedStr = str.split('')
  //   const newArr = splitedStr.reduce((acc,item) => {
  //  switch (item) {
  //    case "C":
  //     acc.push(["C", "G"])
  //    return acc
  //    case "G":
  //     acc.push(["G", "C"])
  //     return acc
  //    case "A":
  //     acc.push(["A", "T"])
  //     return acc
  //    case "T":
  //     acc.push(["T", "A"])
  //     return acc
  //  }
  //  }, [])
  //   return newArr;
  // }
  
  // console.log(pairElement("GCGA"))

// ________________________________________________

  // function fearNotLetter(str) {
  //   const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  //   const idx = alphabet.indexOf(str[0])
  //   const splitedStr = str.split('')
  //   for (let i = idx, j = 0; i < idx + splitedStr.length; i++, j++) {
  //     if (alphabet[i] !== splitedStr[j]) {
  //       return alphabet[i]
  //     }
  //   }
  //   return
  // }
  
  // console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))

  // ________________________________________________

  // function uniteUnique(arr) {
  //   const myArray = [...arguments].flat()
  //  const uniqueArray = [...new Set(myArray)];
  //   return uniqueArray;
  // }
  
  // console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

  // ________________________________________________

  // function convertHTML(str) {
  //   return str.split('').map(symb => {
  //     switch (symb) {
  //       case '&':
  //         return symb = '&amp;'
  //       case '<':
  //         return symb = '&lt;'
  //       case '>':
  //         return symb = '&gt;'
  //       case '"':
  //         return symb = '&quot;'
  //       case "'":
  //         return symb = '&apos;'
  //       default: 
  //       return symb
  //     }
  //   }
  //  ).join('')
  // }
  
  // console.log(convertHTML("Schindler's List"))

  // ________________________________________________

  // function sumFibs(num) {
  //   const fibArr = [0, 1]
  //   while (fibArr[fibArr.length - 1] < num) {
  //     fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
  //   }
  //   const sumFib = fibArr.reduce((acc, numb) => 
  //     numb%2 !== 0 && numb <= num ? acc += numb : acc
  //   )
     
  //   return sumFib;
  // }
  
  // console.log(sumFibs(4000000))

// ________________________________________________

// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const range = Array(max - min + 1)
//     .fill(0)
//     .map((_, i) => i + min);
//   // Largest possible value for SCM
//   const upperBound = range.reduce((prod, curr) => prod * curr);
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     // Check if every value in range divides 'multiple'
//     const divisible = range.every((value) => multiple % value === 0);
//     if (divisible) {
//       return multiple;
//     }
//   }
// }
  
//   console.log(smallestCommons([2, 10]))

// ________________________________________________

  // function dropElements(arr, func) {
  //  const idx =  arr.findIndex(numb => func(numb))
  //  return !~idx ? [] : arr.slice(idx)
  // }
  
  // console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))

// ________________________________________________

  // function steamrollArray(arr) {
  //   return arr.flat(Infinity);
  // }
  
  // console.log(steamrollArray([1, [2], [3, [[4]]]]))

  // ________________________________________________

  // function steamrollArray(arr) {
  //   const flatArr = []
  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       flatArr.push(...steamrollArray(arr[i]))
  //     } else {
  //       flatArr.push(arr[i])
  //     }
  //   }
  //   return flatArr;
  // }
  
  // console.log(steamrollArray([[["a"]], [["b"]]]))

// ________________________________________________

  // function binaryAgent(str) {
  //   const binaryArray = str.split(" ");
  //   const textArray = [];
  //   for (let i = 0; i < binaryArray.length; i++) {
  //     const decimalValue = parseInt(binaryArray[i], 2);
  //     textArray.push(String.fromCharCode(decimalValue));
  //   }
  //   return textArray.join("");
  // }

  // console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

  // ________________________________________________

  // function truthCheck(collection, pre) {
  //   const chekedPre = collection.every(obj => obj[pre])
  //   return chekedPre;
  // }
  
  // console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "name"))

  // ________________________________________________

  // function addTogether() {
  //   const [first, second] = arguments;
  
  //   if (typeof (first) === "number") {
  //     if (typeof (second) === "number") return first + second;
  //     if (arguments.length === 1) return (second) => addTogether(first, second);
  //   }
  // }
  
  // console.log(addTogether(5)(7))

  // ________________________________________________


  // const Person = function(firstAndLast) {
  //   let fullName = firstAndLast;
  
  //   this.getFirstName = function() {
  //     return fullName.split(" ")[0];
  //   };
  
  //   this.getLastName = function() {
  //     return fullName.split(" ")[1];
  //   };
  
  //   this.getFullName = function() {
  //     return fullName;
  //   };
  
  //   this.setFirstName = function(first) {
  //     fullName = first + " " + fullName.split(" ")[1];
  //   };
  
  //   this.setLastName = function(last) {
  //     fullName = fullName.split(" ")[0] + " " + last;
  //   };
  
  //   this.setFullName = function(firstAndLast) {
  //     fullName = firstAndLast;
  //   };
  // };
  
  // const bob = new Person('Bob Ross');
  // console.log(bob.getLastName())

  // ________________________________________________

  // function orbitalPeriod(arr) {
  //   const GM = 398600.4418;
  //   const earthRadius = 6367.4447;
  //   const a = 2 * Math.PI;
  //   const newArr = [];
  
  //   const getOrbPeriod = function(obj) {
  //     const c = Math.pow(earthRadius + obj.avgAlt, 3);
  //     const b = Math.sqrt(c / GM);
  //     const orbPeriod = Math.round(a * b)
  //     return {name: obj.name, orbitalPeriod: orbPeriod};
  //   };
  
  //   for (let elem in arr) {
  //     newArr.push(getOrbPeriod(arr[elem]));
  //   }
  
  //   return newArr;
  // }
  
  // console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))

  // ________________________________________________

  // function palindrome(str) {
  //   const RegExp = /[\W_]/gi
  //   const newStr = str.replace(RegExp, '').toLowerCase()
  //   const reversedStr = newStr.split('').reverse().join('')
  //   return reversedStr === newStr ? true : false
  // }
  
  // console.log(palindrome("0_0 (: /-\ :) 0-0"))

  // ________________________________________________

//  const arabNumb = {
//   1000: 'M',
//   900: "CM",
//   500: 'D',
//   400: 'CD',
//   100: 'С',	
//   90: 'XC',	
//   50: 'L',	
//   40: 'XL',	
//   10: 'X',	
//   9: 'IX',	
//   5: 'V',	
//   4: 'IV',	
//   1: 'I',
//  }

//   function convertToRoman(num) {
//    const splitedNum = num.toString().split('')
//    const arabNumbArr = []
//    let multiple = 1
//    for (let i = splitedNum.length-1; i >= 0; i--) {
//      arabNumbArr.unshift((splitedNum[i] *= multiple).toString())
//      multiple *= 10
//    }
//    const filteredArabNumbArr = arabNumbArr.filter(el => el !== '0')
//    const arabNumbKeys = Object.keys(arabNumb)
//    const romNumbArr = []
//    filteredArabNumbArr.forEach(element => {
//     const isElemInObj = arabNumbKeys.includes(element)
//     if (isElemInObj) {
//       romNumbArr.push(arabNumb[element])
//     } else if (element === '2' || '3' || '20' || '30' || '200' || '300') {
//       switch (element) {
//         case '2':
//         romNumbArr.push('II')
//         break;
//         case '3':
//         romNumbArr.push('III')
//         break;
//         case '20':
//         romNumbArr.push('XX')
//         break;
//         case '30':
//         romNumbArr.push('XXX')
//         break;
//         case '200':
//         romNumbArr.push('CC')
//         break;
//         case '300':
//         romNumbArr.push('CCC')
//         break;
//         case '6':
//         romNumbArr.push('VI')
//         break;
//         case '7':
//         romNumbArr.push('VII')
//         break;
//         case '8':
//         romNumbArr.push('VIII')
//         break;
//         case '60':
//         romNumbArr.push('LX')
//         break;
//         case '70':
//         romNumbArr.push('LXX')
//         break;
//         case '80':
//         romNumbArr.push('LXXX')
//         break;
//         case '600':
//         romNumbArr.push('DC')
//         break;
//         case '700':
//         romNumbArr.push('DCC')
//         break;
//         case '800':
//         romNumbArr.push('DCCC')
//         break;
//         case '2000':
//         romNumbArr.push('MM')
//         break;
//         case '3000':
//         romNumbArr.push('MMM')
//         break;
//       }
//     } 
//    });
//     return romNumbArr.join('');
//    }
   
//    console.log(convertToRoman(59))

    // ________________________________________________

   function rot13(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    return str;
  }
  
  rot13("SERR PBQR PNZC");
  
 