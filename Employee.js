//generate the random number.
let employee = Math.random();
//check whether it is present or not.
if(employee < 0.5){
    console.log("Absent");
    return "Absent";    
} else {
    console.log("Present");
    return "Present";    
}
