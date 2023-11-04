
// let k =[20,40,60, 30];
// function maximum(){
//     sum =0;
//     for(let i=0; i<k.length; i++){
//         if(k[i]%3==0) sum +=k[i];
//     }
//     return sum;
// }
stri = "level";
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



