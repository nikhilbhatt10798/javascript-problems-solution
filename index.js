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

const res = getDaysBetweenDates(fieldsData.fromDate,fieldsData.toDate,'Mon');

console.log(res);