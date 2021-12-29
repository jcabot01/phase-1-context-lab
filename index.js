/* Your Code Here */

const createEmployeeRecord = (array) => {
    return {   //take in an array of data, create a new object with keys assigned to array value inputs.  Initialize timeIn/Out events
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

const createEmployeeRecords = (arrayOfArrays) => {
//take in array of arrays, each one containing employee data, map over each one with createEmployeeRecord to return an array of objects for each employee
    return arrayOfArrays.map(rec => createEmployeeRecord(rec))
}

const createTimeInEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ");  //destructure: split the dateStamp where open space occurs, assign date to [0] and hour to [1]
    hour = parseInt(hour); //convert to integer
    const inEvent = {   //create object to organize timeIn data
        type: "TimeIn",
        hour: hour,
        date: date,
    }
    this.timeInEvents.push(inEvent) // 'this' function & context is requesting access from employee object timeInEvents (or context), we push our inEvent obj into timeInEvent obj.  Need to use function not =>
    
    return this;
}

const createTimeOutEvent = function (dateStamp) {
    let [date, hour] = dateStamp.split(" ");  
    hour = parseInt(hour); //convert to integer
    const outEvent = {   
        type: "TimeOut",
        hour: hour,
        date: date,
    }
    this.timeOutEvents.push(outEvent)
    
    return this;
}

const hoursWorkedOnDate = function (targetDate) {
    const timeIn = this.timeInEvents.find((inEvent) => inEvent.date === targetDate) //'this' function is performing a .find in timeInEvents
    const timeOut = this.timeOutEvents.find((outEvent) => outEvent.date === targetDate)

    return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function (targetDate) {  //take in date
    return hoursWorkedOnDate.call(this, targetDate) * this.payPerHour //call hoursWorked fctn, apply 'this' argument as context, multiply employeeRecord payPerHour by 'this' fctn context(argument)
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) { //access timeInEvents using allWagesFor argument as context, map over inEvents 
        return e.date   //return date that matches 'this' argument
    })

    const payable = eligibleDates.reduce(function (memo, d) {   //perform 
        return memo + wagesEarnedOnDate.call(this, d)   //call wagesEarned fctn but with the context of 'this' fctn (d) in this case (tagetdate i suppose)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We want to bind the fctn context

    return payable
}

const findEmployeeByFirstName = function (srcArray, firstName) { //take in array and firstName
        return srcArray.find(rec => rec.firstName === firstName)    //perform a .find on the main employee array; must equal firstName
    }

const calculatePayroll = function(employeeArray) {  //take in employee array
    return employeeArray.reduce((total, rec) => total + allWagesFor.call(rec), 0) //return to reduce of the total wages; accumulate then add the next wage calling-in allWagesFor, but passing in our criteria from this function
}