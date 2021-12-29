/* Your Code Here */
//employeeArray['first name', 'family name', 'title', payPerHour]

function createEmployeeRecord(array) {
    let newObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    this.array
}

// ### `createEmployeeRecord`

// * **Argument(s)**
//   * A 4-element Array of a `String`, `String`, `String`, and `Number`
//     corresponding to a first name, family name, title, and pay rate per hour
// * **Returns**
//   * JavaScript `Object` with keys:
//     * `firstName`
//     * `familyName`
//     * `title`
//     * `payPerHour`
//     * `timeInEvents`
//     * `timeOutEvents`
// * **Behavior**
//   * Loads `Array` elements into corresponding `Object` properties.
//     _Additionally_, initialize empty `Array`s on the properties `timeInEvents`
//     and `timeOutEvents`.

// ### `createEmployeeRecords`

// * **Argument(s)**
//   * `Array` of `Arrays`
// * **Returns**
//   * `Array` of `Object`s
// * **Behavior**
//   * Converts each nested `Array` into an employee record using
//     `createEmployeeRecord` and accumulates it to a new `Array`

// ### `createTimeInEvent`

// * **Argument(s)**
//   * A date stamp (`"YYYY-MM-DD HHMM"`), where time is expressed in [24-hour standard][miltime]
// * **Returns**
//   * The record that was just updated
// * **Behavior**
//   * Add an `Object` with keys:
//     * `type`: Set to `"TimeIn"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

// ### `createTimeOutEvent`

// * **Argument(s)**
//   * A date stamp (`"YYYY-MM-DD HHMM"`), where time is expressed in [24-hour standard][miltime]
// * **Returns**
//   * The record that was just updated
// * **Behavior**
//   * Add an `Object` with keys:
//     * `type`: Set to `"TimeOut"`
//     * `hour`: Derived from the argument
//     * `date`: Derived from the argument

// ### `hoursWorkedOnDate`

// * **Argument(s)**
//   * A date of the form `"YYYY-MM-DD"`
// * **Returns**
//   * Hours worked, an `Integer`
// * **Behavior**
//   * Given a date, find the number of hours elapsed between that date's
//     timeInEvent and timeOutEvent

// ### `wagesEarnedOnDate`

// * **Argument(s)**
//   * A date of the form `"YYYY-MM-DD"`
// * **Returns**
//   * Pay owed
// * **Behavior**
//   * Using `hoursWorkedOnDate`, multiply the hours by the record's
//     payRate to determine amount owed. Amount should be returned as a number.
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// ### `findEmployeeByFirstName`

// * **Argument(s)**
//   * `srcArray`: Array of employee records
//   * `firstName`: String representing a first name held in an employee record
// * **Returns**
//   * Matching record or `undefined`
// * **Behavior**
//   * Test the `firstName` field for a match with the `firstName` argument

// ### `calculatePayroll`

// * **Argument(s)**
//   * `Array` of employee records
// * **Returns**
//   * Sum of pay owed for **all** employees for all dates, as a number
// * **Behavior**
//   * Using `allWagesFor` for each of the employees, accumulate the value of
//     all dates worked by the employee in the record used as context. Amount
//     should be returned as a number.
