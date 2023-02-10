// const fieldsData = {
//   fromDate: 'Thu Feb 09 2023 00:00:00 GMT+0530 (India Standard Time)',
//   toDate: 'Sat Feb 18 2023 00:00:00 GMT+0530 (India Standard Time)',
//   selectedWeekDays:[
//     {
//         "label": "Mon",
//         "value": true
//     },
//     {
//         "label": "Tue",
//         "value": true
//     },
//     {
//         "label": "Wed",
//         "value": false
//     },
//     {
//         "label": "thu",
//         "value": true
//     },
//     {
//         "label": "Fri",
//         "value": false
//     },
//     {
//         "label": "Sat",
//         "value": false
//     },
//     {
//         "label": "Sun",
//         "value": false
//     }
//   ]
// };
// console.log(fieldsData.fromDate,fieldsData.toDate)

const getDaysOfWeekBetweenDates = (sDate, eDate) => {
  const startDate = new Date(sDate);
  const endDate = new Date(eDate);
  endDate.setDate(endDate.getDate() + 1);
  const daysOfWeek = [];
  let i = 0;
  // console.log(startDate);
  // console.log(endDate);
  while (i < 7 && startDate < endDate) {
    daysOfWeek.push(startDate.getDay());
    startDate.setDate(startDate.getDate() + 1);
    console.log(startDate);
    i++;
  }
  return daysOfWeek;
};

getDaysOfWeekBetweenDates(
  'Thu Feb 09 2023 00:00:00 GMT+0530',
  'Sat Feb 18 2023 00:00:00 GMT+0530'
); // => [ 4, 5, 6, 0 ]
