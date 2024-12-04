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

    const partTimeHours = 4;
    const fullTimeHours = 8;
    const wagesPerHours = 20;
    
    // Generate the random number between 0 to 2
    let employeeType = Math.floor(Math.random() * 3);
    let workedHours = 0;
    
    switch(employeeType){
        case 0:
            workedHours = 0;
            console.log("No Time worked");
            break;
        case 1:
            workedHours = partTimeHours;
            console.log("Part Time Worked");
            break;
        case 2:
            workedHours = fullTimeHours;
            console.log("Full Time Worked");
            break;
        default:
            workedHours = 0;
            console.log("Invalid Output");
    }
    
    let dailyWages = workedHours * wagesPerHours;
    return dailyWages;  // count the wages .
