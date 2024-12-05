const prompt =require('prompt-sync')();
// Use case 1 for Attendance Check
function checkAttendance() {
  // Generate the random number
  let employee = Math.random();
  // Check whether the employee is present or not
  if (employee < 0.3) {
    //console.log("Absent");
    return "Absent";
  } else {
    //console.log("Present");
    return "Present";
  }
}

// Use case 2 Calculate the wages for part-time and full-time
function calculateDailyWages() {
  const partTimeHours = 4;
  const fullTimeHours = 8;
  const wagesPerHour = 20;

  // Generate the random number between 0 to 2
  let employeeType = Math.floor(Math.random() * 3);
  let workedHours = 0;

  switch (employeeType) {
    case 0:
      workedHours = 0;
    //   console.log("No Time worked");
      break;
    case 1:
      workedHours = partTimeHours;
    //   console.log("Part Time Worked");
      break;
    case 2:
      workedHours = fullTimeHours;
    //   console.log("Full Time Worked");
      break;
    default:
      workedHours = 0;
    //   console.log("Invalid Output");
  }

  let dailyWages = workedHours * wagesPerHour;
  return { dailyWages, workedHours }; // Return both wages and hours
}

//Use Case3 refactor the code and find the work hours
// Function to check attendance and calculate wages if present
/*let result = calculateDailyWages();
console.log("Total worked hours: " + result.workedHours);
console.log("Final wages: $" + result.dailyWages);*/

//Use case 4 using the for loop
function monthlySalary(month) {
  let totalHours = 0;
  let Salary = 0;
  let totalDays = 0;

  for (let i = 0; i < 20; i++) {
    let attendance = checkAttendance();
    if (attendance==="Present") {
      let result = calculateDailyWages();
      totalDays++;
      totalHours += result.workedHours;
      Salary += result.dailyWages;
    }
  }
  //console.log("The Employee worked hours:", totalHours, ", montly salary:", Salary," and days:",totalDays);
  return { totalDays,totalHours,Salary,month}
}
//monthlySalary()
//Use Case 5 using the while loopCalculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
 
function maxWages(){
    let totalHours = 0;
    let Salary = 0;
    let totalDays = 0;

    while (totalDays <20 && totalHours <160) {
        let attendance = checkAttendance();
        if (attendance) {
        let result = calculateDailyWages();
        totalDays++;
        totalHours += result.workedHours;
        Salary += result.dailyWages;
        }
    }
  console.log("The Employee worked hours:", totalHours, ", montly salary:", Salary,"and total days:",totalDays);
}

//maxWages();

//Use case 6 where we have to find the employee annual salary for month wise.
function monthly(num){
    switch(num){
    case 1:
        return "January";        
    case 2:
        return "February";
    case 3:
        return "March" ;  
    case 4:
        return "April";
    case 5:
        return "May" ;
    case 6:
        return "June";
    case 7:
        return "July" ;
    case 8:
        return "August" ;
    case 9:
        return "September";
    case 10:
        return "October" ;
    case 11:
        return "November" ;
    case 12:
        return "December" ;
    default:
        return "Invalid Output";
    }
}
function annualSalary(){
    let employee=[];
    for (let i=1;i<=12;i++){
        const month=monthly(i);
        const salaryannual=monthlySalary(month);
        employee.push(salaryannual);
    }
    return employee;
}

//console.log(annualSalary());
//Use Case 7 where we take the user input data and calculate their wages.
function calculateUsers(){
    const usersdata=new Map();
    const input=parseInt(prompt("Enter the Employee number: "));
    for (let i=0;i<input;i++){
        const name=prompt("Enter the name of the Employee: ");
        const userdata=annualSalary();
        usersdata.set(name,userdata)
        
    }
    return usersdata;
}
console.log(calculateUsers());


