// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("codedMes", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("a function that takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        expect(codedMes(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMes(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMes(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

//  ● codedMes › a function that takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// ReferenceError: codedMes is not defined


// b) Create the function that makes the test pass.

// Create a function named codedMes with a string as the input parameter
// Create a new variable and assign it to a built in method to the string to replace 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// Return the new variable


const codedMes = (string) => {
let codeString = string.replace(/a/g, 4).replace(/e/g, 3).replace(/i/g, 1).replace(/o/g, 0).replace(/A/g, 4).replace(/E/g, 3).replace(/I/g, 1).replace(/O/g, 0)
return codeString
}


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("findLetter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("a function that takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        expect(findLetter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(findLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//  ● findLetter › a function that takes in an array of words and a single letter and returns all the words that contain that particular letter

// ReferenceError: findLetter is not defined


// b) Create the function that makes the test pass.

// Create a function named findLetter that takes two inputs as a parameter: first one array and second parameter: single letter (string)
// Create an empty array named filArray
// Iterate over each value in the input array to find if the input letter/string is present
    // If present, push the value into finArray
// Return finArray

const findLetter = (array,letter) => {
    let filArray = []
   array.map(value => {
    if (value)array.includes(letter)
    filArray = filArray.push()
   })
   return filArray
    }

// I also spent a bunch of time on this one and can't figure out what I'm doing wrong. I tried moving the return between different brackets and I tried removing the "if" and putting value into the .push. But now when I run it, it says this:

// TypeError: filArray.push is not a function

// 84 |    array.map(value => {
// 85 |     if (value)array.includes(letter)
// > 86 |     filArray = filArray.push()
//    |                         ^
// 87 |    })
// 88 |    return filArray
// 89 |     }






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
    it("a function that takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})


// ● fullHouse › a function that takes in an array of 5 numbers and determines whether or not the array is a full house

// ReferenceError: fullHouse is not defined

// a) Create a test with expect statements using the variable provided.


// Create a function named fullHouse that takes an array with 5 numbers in it as a parameter
// Iterate over all the values in the array to determine if any of the indices values are equal. 
// If there are equal values, determine the number of occurences of each value that was repeated
// If the number of occurences of value1 or value 2 are equal to 3 AND the number of occurences of value1 or value2 are 2,
    // Return "FULL HOUSE"
    // Else return "No full house this time!"


// b) Create the function that makes the test pass.

const fullHouse = (array) => {
    let counter = 0;
    array.forEach()
    for (let i = 0; i <= array.length; i++) {
        if (array[i] == element) {
            counter++;
}
    }
}

//  I got lost on this one. Even after seeing examples and trying to research to find how to do what I wanted, I resorted to trying to even use code examples online and it still doesnt work. After spending so much back and forth time on this, I had to give up. 