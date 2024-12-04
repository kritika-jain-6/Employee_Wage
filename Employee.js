// Use case 1 for Attendance Check
function checkAttendance() {
  // Generate the random number
  let employee = Math.random();
  // Check whether the employee is present or not
  if (employee < 0.5) {
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
function monthlySalary() {
  let totalHours = 0;
  let Salary = 0;
  let totalDays = 0;

  for (let i = 0; i < 20; i++) {
    let attendance = checkAttendance();
    if (attendance) {
      let result = calculateDailyWages();
      totalDays++;
      totalHours += result.workedHours;
      Salary += result.dailyWages;
    }
  }
  console.log("The Employee worked hours:", totalHours, "and montly salary:", Salary);
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
maxWages();