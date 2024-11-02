// 1. Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). Return true if the strings are the same, otherwise return false.

function comparesStr(str1 , str2) {
    if(str1.toLowerCase() === str2.toLowerCase()){
        return true;
    }else{
        return false;
    }
};

// console.log(comparesStr('wit' , 'wit')); // true
// console.log(comparesStr("World", "world")); // true
// console.log(comparesStr("JavaScript", "JAVA")); // false



// 2. Create a function that checks if a given sentence contains the word "JavaScript" using the includes () method. Return a message indicating whether the word is found.

function containsJavaScript(sentence) {
    if (sentence.includes("JavaScript")) {
        return "The word 'JavaScript' is found in the sentence.";
    } else {
        return "The word 'JavaScript' is not found in the sentence.";
    }
}

// console.log(containsJavaScript("I love JavaScript programming.")); 
// console.log(containsJavaScript("I am learning to code.")); 



// 3. Write a function that splits a sentence into an array of words using split(). Then, use join() to convert the array back into a sentence, separating the words with hyphens (-).

function splitTheSentence (params) {
    // console.log(params);
    const words = params.split(" ");
    // console.log(words);
    const joinedWords = words.join('-');
    // console.log(joinedWords);
    return joinedWords;
};

// console.log(splitTheSentence("Hello JavaScript"));

// 4. Create a function that takes a string and extracts a portion using slice(). The function should take a start and an end index as arguments and return the sliced part.

function sliceStringProtion(sentence , start , end) {
    const sentenceSplice = sentence.slice(start, end);
    return sentenceSplice;
};

// console.log(sliceStringProtion("Hello JavaScript" , 0 , 6));
// console.log(sliceStringProtion("Hello JavaScript" , 6 , 17));


// 5. Given an object with properties name, email, and age, use destructuring to extract the values into variables and log them to the console.

const user = {
    name : "SIFAT ULLAH SHOYON",
    age : 23,
    email: 'freelancersifat627@gmail.com'
};

// const { name , age , email } = user;
const { ...data } = user;

// console.log(name);  
// console.log(email); 
// console.log(age);   
// console.log(data);

