
// let k =[20,40,60, 30];
// function maximum(){
//     sum =0;
//     for(let i=0; i<k.length; i++){
//         if(k[i]%3==0) sum +=k[i];
//     }

//     return sum;
// }
let stri = "level";
function isPalindrome(){
    for(let i=0, j=stri.length-1; i<j && j>i; ++i, --j){
        if(stri[i]!==stri[j]){
            return false;
        }
        return true;
    }
}
console.log(isPalindrome());

//function to return max
function max(a, b){
    if(a>b) return a;
    return b;
}
//function to return max
function maxOfThree(a, b, c){
    if(a>=b && a>=c) return a;
    else if(b>=a && b>=c) return b;
    else return c;
}


//function to remove apples from the list
let array =["apple", "banana", "tomato"];
let arr2 =[];
let count=0;
    for(let i=0; i<array.length; i++){
        if(array[i]!="apple"){
                 arr2[count++]=array[i];
        }
    }

console.log(arr2);

//Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, 
//sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
let  a =[1,2,3,4]
let sum =0;
let mult =1;
function summ(){
    for(let i=0; i<a.length; ++i){
        sum+=a[i];
    }
    return sum;
}

function multply(){
    for(let i=0; i<a.length; i++){
        mult*=a[i];
    }
    return mult;
}
console.log(summ(), multply());


//Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
k ="jag testar";
j ="";
count=0;
function reversal(){ 
    for(let i=k.length-1; i>=0; --i){
        j[count++]=k[i]
    }
     return j;
}
console.log(reversal());



//4th nov
//Write a function isVowel() that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.

function isVowel(char){
    let vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // for(let i=0; i<vowelArray.length; ++i){}
    for(let item of vowelArray){
        if(char ==item) return true;
    }
    return false;
}
console.log(isVowel("a"));

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
;//["Hi there", "how are", "you doing?"];
function findLongestWord(words){
    let first=words[0];
    for(let w of words){
        if(w.length>first.length){
            first=w;
        }
    }
    return first;
}
console.log(findLongestWord(["Hi there", "how are", "you doing?"]));

//Write a function filterLongWords() that takes an array of words 
//and an integer i and returns the array of words that are longer than i.

returnedWords=[];
let index=0;
function filterLongWords(wordArray, i){
    for(let w of wordArray){
        if(w.length>i){
            returnedWords[index++]=w;
        }
    }
    return returnedWords;
}

console.log(filterLongWords(["I love class", "are you sure", "yes i am"], 9));

//Implement indexOf, lastIndexOf, includes, slice, splice
//split using for loops without built-in functions for strings and arrays.
const myString = "Hello, World!";
const slicedString = myString.slice(7); // returns Extracts characters from index 7 to the end..(0 based index)
console.log(slicedString);

const mArray=[2,3,4,5,7,8,9];
const b = mArray.splice(2, 3, 0,0);  //(start-index, deleteCount, item, item) item1 n item2 are optional to be added
console.log(mArray);//changes the original array, even wen its const...we can also provide a variable to handle deleted..b
///////////////////////////////////////////////////////////////////////////////////////////////////////////
let theArray = [4,5,6,7,5, 8,9];
let theString ="What is that"    
console.log(theArray.indexOf(5)); //brings index of the first appearance of the element
console.log(theString.indexOf("s")); //brings index of the first appearance of the element
function firstIndexOf(ind){  //use of index by loops... indexOf
    for(let i=0; i<theArray.length; ++i){ 
        if(theArray[i]==ind)return i;
    }
    return null;
}
console.log(firstIndexOf(5));
function IndexLastOf(inde){//implementation of lastIndex
    for(let i=theArray.length-1; i>=0; --i){
        if(inde==theArray[i]) return i;
    }
    return null;
}
console.log(IndexLastOf(0));

//use of includes
let myArr = [2,3,4,6,5,4];
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result); //returns true or false
console.log(myArr.includes(0)); //returns true or false;
function includes(number){
    for(let k=0; k<myArr.length; ++k){
        if(myArr[k]===number){
            return true;
        }
    }
    return false;
}
console.log(includes(3));
//use of split;
//splits a string to an array, doesnt mutate the array //syntax (separator, limit)...limit of 2 will give us only 2 splits
let str = "Geeks for Geeks"; 
let ar = str.split("for") //split will seperate by comma, a string into an array of strngs. ..[ 'Geeks ', ' Geeks' ]
console.log(ar) //the seperator should be in the middle-always and is always removed...

let ak = str.split("");  
console.log(ak);   //[ 'G', 'e', 'e', 'k','s', ' ', 'f', 'o','r', ' ', 'G', 'e','e', 'k', 's']

let ab = str.split("for", 1);    //1 is the limit here ..output = [ 'Geeks ' ]
console.log(ab); 
//assume number is the split limit 
function split(lim){
    let stringArr=[];
    if(lim<1) return null;
    for(let i=0; i<lim; ++i){
        stringArr[i] = str[i];
    }
    return stringArr
}
console.log(split(2));

///////////////////////////////////////////////////


let am =[2,4,6,8,10,12,14];
const d = am.splice(3);
console.log(am);
 


