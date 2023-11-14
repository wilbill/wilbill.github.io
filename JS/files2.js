// Write a function, scoreExams, that takes an array of arrays of student answers and an array of the correct answers. 
//It should compare each student’s answers against the correct answers and return an array holding the scores of each 
//student. The score for each student is a count of the number of correct answers
//(i.e., matches with the key of correct answers).
// For example  const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]]; 
// const correctAnswers = [3, 1, 2,4];  scoreExams(studentAnswers, correctAnswers)); --> [3,2,3]; 
let score=[];
function scoreExams(studentAnswers, correctAnswers){
    let i=0;
    for(let arr of studentAnswers){
        let count=0;
        for(let j=0; j<arr.length; ++j){
            if(arr[j]==correctAnswers[j]){
                count++;
            }
        } 
        score[i++] = count;
    }
    return score;
}
console.log(scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3, 1, 2,4]));



//Write a function, scoreForecasts, that takes 2 parameters which are each arrays. 
// The first is an array of temperature forecasts.  The second is an array of observed temperatures. 
// If the forecast temperature is within 2 degrees of the actual that is 100% accurate.  
//If the forecast is within 5 degrees that is 80% accurate.  If it is within 10 degrees that is 60% accurate. 
// If the forecast is outside 10 degrees that is a miss or 0% accurate.  
//scoreForecasts should find the percent accuracy for each forecast and return the average accuracy for a set of 
//forecast temperatures.  const forecast1 = [80, 90, 85];  const observed1 = [82, 95, 70];  
//scoreForecasts(forecast1, observed1) ; 1st Temp (80,82) - 2 degrees – 100% 
// 2nd Temp (90,95) - 5 degrees – 80%  
//3rd Temp (85,70) - 15 degrees – 0%  PercentArray [100,80,0] 
// RESULT Average   (100 + 80 + 0)/3 = 60  2. const forecast2 = [80, 80, 80];  
//const observed2 = [82, 85, 74];  scoreForecasts(forecast2, observed2) à  PercentArray [100,80,60] 
// RESULT  Average   (100 + 80 + 60)/3 = 80    console.log("expect 60 ", scoreForecasts(forecast1, observed1));  
//console.log("expect 80", scoreForecasts(forecast2, observed2)); 

let res = [];
let avg=0;
let summ =0;
function scoreForecasts(forecastArray, observedArray){
    for(let i=0; i<forecastArray.length; ++i){
        if(Math.abs(forecastArray[i]-observedArray[i])<=2){
            res[i]=100;
        }
        else if(Math.abs(observedArray[i]-forecastArray[i])>2 && Math.abs(observedArray[i]-forecastArray[i])<=5){
            res[i]=80;
        }
        else if(Math.abs(observedArray[i]-forecastArray[i])>5 && Math.abs(observedArray[i]-forecastArray[i])<=10){
            res[i]=60;
        }
        else if(Math.abs(observedArray[i]-forecastArray[i])>10){
            res[i]=0;
        }
    }//getting avg
    for(let i=0; i<res.length; ++i){
        summ+=res[i];
    }
    return (summ)/(res.length);
}

console.log(scoreForecasts([80, 90, 85], [82, 95, 70]));

//
//Write a function, firstRowColSum, to determine the sum of first  row and  first column of a 2-dimensional array
// and return an array of first row sum and first column sum testArr1 = [[1,2,3], [5,2,3], [9,2,3]] 
// first row Sum = 1+2+3 = 6 first column Sum = 1+5+9 ->15  firstRowColSum (testArr1) à  [6, 15]  
// testArr2 = [ [1, 2], [3, 4], [5, 6]] first row Sum = 1+2 =3 first column Sum = 1+3+5 ->9 
//firstRowColSum (testArr2) à  [3, 9]   console.log("expect : [6,15] ",
// firstRowColSum (testArr1]));  console.log("expect : [3,9] ", firstRowColSum (testArr2)); 
let expect=[];
let firstRowsum =0;
let firstColumnsum =0;
function firstRowColSum(test){
    for(let ele of test) firstColumnsum+=ele[0];    
    for(let ele of test){
        for(let e of ele){
            firstRowsum+=e;
      }  
      return [firstRowsum, firstColumnsum];    
    }
}

console.log(firstRowColSum([[1,2,3], [5,2,3], [9,2,3]]));