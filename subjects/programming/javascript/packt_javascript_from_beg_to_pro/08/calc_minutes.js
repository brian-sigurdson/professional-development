// incident date
// UTC: "2022-06-27 14:48:00.335000+00:00"
//  ET: June 27, 2022 at 10:48:00 AM UTC-4

let incidentDateET = new Date(Date.UTC(2022, 5, 27, 10, 48, 0, 335));
let incidentDateUTC = new Date(2022, 5, 27, 10, 48, 0, 335);

let testDate1UTC = new Date(2022, 7, 17, 16, 0, 0, 0);
let testDateTodayUTC = new Date(2022, 7, 17, 17, 30, 0, 0);

let notificationDateTodayUTC =  new Date(2022, 7, 18, 15, 10, 0, 0);
let failoverDateTodayUTC =      new Date(2022, 7, 18, 15, 23, 0, 0);


// console.log("incidentDateET", incidentDateET)
// console.log("incidentDateUTC", incidentDateUTC);
// console.log("testDate1UTC", testDate1UTC);
// console.log("testDateTodayUTC", testDateTodayUTC);
console.log("notificationDateTodayUTC", notificationDateTodayUTC);
console.log("failoverDateTodayUTC", failoverDateTodayUTC);

// console.log(testDate1UTC.valueOf());
// console.log(testDateTodayUTC.valueOf());
// console.log(testDateTodayUTC.valueOf() - testDate1UTC.valueOf());

function minutesApart(testDate, incidentDate) {
    // 1 minute = 60,000 milliseconds
    return Math.ceil((testDate.valueOf() - incidentDate.valueOf())/60000);
}

// console.log(minutesApart(testDateTodayUTC, testDate1UTC));
// console.log(minutesApart(testDateTodayUTC, incidentDateUTC));
console.log("Notify  : ", minutesApart(notificationDateTodayUTC, incidentDateUTC));
console.log("Failover: ", minutesApart(failoverDateTodayUTC, incidentDateUTC));