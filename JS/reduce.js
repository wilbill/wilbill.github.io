function reduceArray(array){
        let sum = array
        .filter((val) => val%2==0)
        .reduce((acc, val) => acc+val);       
    return sum;
}
    console.log(reduceArray([1,2,3,4, 5, 3, 10]));
        


