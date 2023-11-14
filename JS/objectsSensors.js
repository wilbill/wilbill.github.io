//Sensors

let frontDoor = {id:1,name:"Front Door Sensor",type:34,manufacturer:"Climax", 
    events:[{time:"100",name:"Door Closed"},{time:"101",name:"Door Opened"}]
};   
let motionSensor = {id:2,name:"Motion Sensor",type:43,manufacturer:"NYCE", 
     events:[{time:"100",name:"Motion Detected"}]};   

let porticoLight ={id:3,name:"Portico Light",type:54,manufacturer:"Osram",  
    events:[{time:"100",name:"Light off"}]}; 

let mainEntrance = {id:4,name:"Main Entrance",type:34,manufacturer:"Climax",  
    events:[{time:"100",name:"Door Closed"}]};

let list = [frontDoor, motionSensor, porticoLight, mainEntrance] ; 

//List the number of sensors by the Manufacturer.
let sensors={};
for(let s of list){
    if(sensors[s.manufacturer]){
        sensors[s.manufacturer] +=1;
    }
    else{
        sensors[s.manufacturer]=1;
    }
}
console.log(sensors);


//Get the most recent event of given Sensor(Sensor ID). (sort the events by time,  
//either manually of using Array methods) 
let recent = Number(list[0].events[0].time);  //time for the first object just like we do in arrays
let ev = list[0].events[0].name;
for(let sens of list){
   console.log(sens.events)
   for(let s of sens.events){
    if((Number(s.time)>recent) && (s.name) ){
        recent = s.time;
        ev=s.name;
    } 
   }
}
console.log( ev+":"+recent);

// Find the Most Popular Manufacturer. 
//Return the Manufacturer that has most  number of Sensors. (use groupSensorsByManufacturer function) 
    let sensorss = {};
    for (let s of list) {
        if (sensors[s.manufacturer]) {
            sensors[s.manufacturer] += 1;
        } else {
            sensors[s.manufacturer] = 1;
        }
    }
    
    let max =0;
    let man = Object.values(sensorss)[0]; //first element  //we get length by  Object.keys(sensorss).length;
    console.log(man)
   

console.log(max)