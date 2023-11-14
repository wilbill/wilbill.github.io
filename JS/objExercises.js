let tataTiago = {name:"Tata Tiago",manufacturer:"Tata",fuelType:"petrol",bodyType:"hatchback", seatingCapacity:5,price:5000} 
let nexon = {name:"Tata Nexon",manufacturer:"Tata",fuelType:"diesel",bodyType:"SUV", seatingCapacity:5,price:7000};   
let mahindra = {name:"Mahindra XUV700",manufacturer:"Mahindra",fuelType:"petrol", bodyType:"SUV", seatingCapacity:5,price:7500}; 
let mg = {name:"MG ZS EV",manufacturer:"Mahindra",fuelType:"Electric",bodyType:"SUV", seatingCapacity:5,price:25000};  
let volvo ={name:"Volvo XC90",manufacturer:"Volvo",fuelType:"petrol",bodyType:"hybrid", seatingCapacity:7,price:35000};   
let list = [tataTiago,nexon,mahindra,mg,volvo] 
//a. Get Petrol Cars below given price 
//getPetrolCarsWithinPrice(list,15000)->
for(let cars of list){
    if(cars.price<=15000){
        console.log(cars);
    }
}

//b. Return the number of cars by each Manufacturer (commented below is chatgpts)

// let manufacturerCount = {};

// for (let car of list) {
//     if (manufacturerCount[car.manufacturer]) {
//         manufacturerCount[car.manufacturer] += 1;
//     } else {
//         manufacturerCount[car.manufacturer] = 1;
//     }
// }

// // Printing the number of cars by each manufacturer
// for (let manufacturer in manufacturerCount) {
//     console.log(`${manufacturer}: ${manufacturerCount[manufacturer]}`);
// }
let emp =[];
let i=0;
for(let cars of list){
    emp[i++]=cars.manufacturer;
}
console.log(emp);
let count=0;
indexArray =[];
for(let i=0; i<emp.length; ++i){
    let num=1;
    for(let j=0; j<emp.length; ++j){
        if(i!=j){
            if(emp[i]==emp[j]){
                 num++;
                }
            }   
    }
    indexArray[i] = num;
}
let obj={};
for(let i=0; i<emp.length; ++i){
    console.log(emp[i]+":"+indexArray[i]);
    obj[emp[i]]=indexArray[i]; //this is the best trick....ever, objects dont keep duplicates.
   
}
console.log(obj)


///////////////////////////////////////////////////////////////this is chat gpt

//c. Sort the list by given filter. 
//If filter is price, show the list from cheapest to highest price, 
//if filter is 'bodyType' , sort the list by bodyType.length. 
//this is me though

////////////////////////////////chat gpt
function sortByPrice(list) {
    return  list.sort((a, b) => a.price - b.price);
}

// Sorting by bodyType length
function sortByBodyTypeLength(list) {
    //return list.sort((a, b) => a.bodyType.length - b.bodyType.length);
}

// Sort the list by price
console.log("Sorted by price:");
console.log(sortByPrice(list));

// Sort the list by bodyType length
console.log("Sorted by bodyType length:");
console.log(sortByBodyTypeLength(list));

//d. Add another property serviceCost with given value to all the car objects in the list. 
//The soln here is mine and it works well
// for(let c of list){
//     for(let k in c){
//         if(c.hasOwnProperty(k)){
//             k = "serviceCost";
//             c[k]= "1000";
//         }
//     }
    
// }

const serviceCostValue = 1000;
for (let car of list) {
    car.serviceCost = serviceCostValue;
}
console.log(list)


