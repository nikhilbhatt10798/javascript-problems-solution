const fieldsData = {
  fromDate: 'Thu Feb 09 2023 00:00:00 GMT+0530 (India Standard Time)',
  toDate: 'Sat Feb 18 2023 00:00:00 GMT+0530 (India Standard Time)',
  selectedWeekDays:[
    {
        "label": "Mon",
        "value": true
    },
    {
        "label": "Tue",
        "value": true
    },
    {
        "label": "Wed",
        "value": false
    },
    {
        "label": "thu",
        "value": true
    },
    {
        "label": "Fri",
        "value": false
    },
    {
        "label": "Sat",
        "value": false
    },
    {
        "label": "Sun",
        "value": false
    }
  ]
};
// console.log(fieldsData.fromDate,fieldsData.toDate)

function getDaysBetweenDates(start, end, dayName) {
  var result = [];
  var days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
  var day = days[dayName.toLowerCase().substr(0,3)];
  // Copy start date
  var current = new Date(start);
  // Shift to next of required days
  current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
  // While less than end date, add dates to result array
  while (current < end) {
    result.push(new Date(+current));
    current.setDate(current.getDate() + 7);
  }
  return result;  
}

// Get Wednesdays between 15 December, 2016 and 25 February, 2017.
// const res = getDaysBetweenDates(
//               new Date('Thu Feb 09 2023 00:00:00 GMT+0530 (India Standard Time)'),
//               new Date('Sat Feb 18 2023 00:00:00 GMT+0530 (India Standard Time)'),
//               'Fri');
const res ={};

fieldsData.selectedWeekDays.filter((day) => {
  if (day.value === true)
    weekday = day.label;
     res[weekday]=( getDaysBetweenDates(
        new Date(fieldsData.fromDate),
        new Date(fieldsData.toDate),
        day.label
      ));
});
// const res = getDaysBetweenDates(new Date(fieldsData.fromDate), new Date(fieldsData.toDate), 'Fri');
console.log(res);
// console.log(res,fieldsData.fromDate,fieldsData.toDate);




/*============================================ explanation =====================
This is a JavaScript function named "getDaysBetweenDates" that takes three parameters:

1."start": a date object representing the start date
2."end": a date object representing the end date
3."dayName": a string representing the name of a day of the week (e.g. "Monday", "Tuesday", etc.)
The function returns an array of date objects representing all instances of the specified day between the start and end dates (inclusive).

Here's how the function works:

1.First, the function creates an empty array named "result". This array will be used to store the date objects that the function returns.

2.The next step is to create an object named "days" that maps the first three letters of the day of the week (e.g. "Sun", "Mon", "Tue", etc.) to the corresponding day of the week as a number (Sunday is 0, Monday is 1, Tuesday is 2, etc.).

3.The function then calculates the day of the week for the start date by using the "day" variable.

4.Next, the function creates a new date object named "current", which is a copy of the start date. This date object will be used to iterate through the weeks between the start and end dates.

5.The function then calculates the next instance of the specified day of the week by adding the number of days needed to get to the next instance of that day. This is done using the following line of code:

current.setDate(current.getDate() + ((day - current.getDay() + 7) % 7));

6.The function then enters a loop that continues until "current" is no longer less than "end". In each iteration of the loop, the function pushes a new date object representing the current date onto the "result" array.

7.Finally, the function returns the "result" array.




=================================================
*/
// // ======================= 11 -02 -2023 
// // let selectedDayDates = {};
// // let weekDayArr = [];
// // let weekday;

// // fieldsData.selectedWeekDays.filter((day) => {
// //   if (day.value === true) {
// //     weekday = day.label;
// //     weekDayArr.push(weekday);
// //     selectedDayDates[weekday] = getDaysBetweenDates(
// //       new Date(fieldsData.fromDate),
// //       new Date(fieldsData.toDate),
// //       day.label
// //     );
// //   }
// // });
// // // const res = getDaysBetweenDates(new Date(fieldsData.fromDate), new Date(fieldsData.toDate), 'Fri');

// // console.log('weekday', weekday);
// // console.log('selectedDayDates', selectedDayDates);


// // ==============================================================================


// let selectedDayDates = [
//    [
//     '2023-02-13T18:30:00.000Z',
//     '2023-02-20T18:30:00.000Z',
//     '2023-02-27T18:30:00.000Z',
//     '2023-03-06T18:30:00.000Z',
//     '2023-03-13T18:30:00.000Z'
//   ],
//  [
//     '2023-02-16T18:30:00.000Z',
//     '2023-02-23T18:30:00.000Z',
//     '2023-03-02T18:30:00.000Z',
//     '2023-03-09T18:30:00.000Z',
//     '2023-03-16T18:30:00.000Z'
//   ],
//    [
//     '2023-02-11T18:30:00.000Z',
//     '2023-02-18T18:30:00.000Z',
//     '2023-02-25T18:30:00.000Z',
//     '2023-03-04T18:30:00.000Z',
//     '2023-03-11T18:30:00.000Z'
//   ]
// ]

// for (const i in selectedDayDates) {
//   for (const j in selectedDayDates[i]) {
//     let dateFrom = selectedDayDates[i][j].split('T')[0];
//     console.log({
//       listingId: 57657,
//       dateFrom: dateFrom,
//       dateTo: addDays(new Date(selectedDayDates[i][j]), 1),
//       price: 56,
//       extraPrice: 0,
//     });
//   }
// }

// function addDays(theDate, days) {
//   let nextdate = new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
//   return nextdate;
// }

// //   // let date = '2023-02-13T18:30:00.000Z';
// //   // create a date variable 
// var date = new Date("2023-02-13T18:30:00.000Z");
// var nextDay = addDays(date,1 );
// console.log(nextDay);


// selectedDayDates.forEach((dates) => {
//   dates.forEach((date) => {
//       console.log(date);
//   });
// });

// // ===========================
//     // function addDays(theDate, days): string {
//     //   let nextdate = new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
//     //   // console.log(nextdate);
//     //   let day = nextdate.getDate();
//     //   let month = nextdate.getMonth();
//     //   let year = nextdate.getFullYear();
//     //   return `${year}-${month}-${day}`;
//     // }
