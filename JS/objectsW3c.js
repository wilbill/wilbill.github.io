//Write a JavaScript program to list the properties of a JavaScript object.
//by properties, they refer to (k, v) pairs.
var student = {name : "David Rayy", sclass : "VI", rollno : 12 };
for(let k in  student){
    console.log(key);   //-------> we can get keys from here.
    if(student.hasOwnProperty(k)){
        //v = student[k];
        console.log(k,":",v);  //or console.log(k+":"+v);  
    }
}
//Deleting an object property
for(let key in student){
    if(key==="rollno"){
        delete student.rollno;
    }
}
console.log(student);

//Write a JavaScript program to get the length of a JavaScript object.
var some = {
name : "David Rayy",
sclass : "VI",
rollno : 12 }

let leng = Object.keys(some).length;  //straight forward to get length;
console.log(leng);

let len=0;
for(let k in some) len++;     //loop to get the length; I will use this
console.log(len);

//17. Write a JavaScript function to check whether an object contains a given property. (shd have been key not proprty)
function property(prop){
    for(let k in some){
        if(k==prop) return true;   //if u pass in name directly...shd be if(k=="name"){return true;}
        return false;
    }
}
console.log(property("name"));

//my question..function to check if a given object contains a passed in value...not key
var somes = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }
function props(){
    for(let k in somes){
        if(somes.hasOwnProperty(k)){
            console.log(somes[k])
        }   
    }
}
props(); //function w/c just prints...no need for return statements

function props(prope){
    for(let k in somes){
        if(somes.hasOwnProperty(k)){
            if(somes[k]==prope){
                return true;
            }
        }   
    }
   return false;
}
console.log(props("VI"));

//Function to convert object into key value pairs in an array of arrays..2d
const colors = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
let maArr =[];
let index =0;
for(let k in colors){
    if(colors.hasOwnProperty(k)){  //if object.hasOwnProperty()....
        maArr[index++]=k+":"+colors[k];
    }
}
console.log(maArr);