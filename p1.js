const countDaysOfWeekBetweenDates = (
  sDate = "2021-07-18", 
  eDate = "2021-07-20"
) => {
const startDate = new Date(sDate)
const endDate = new Date(eDate);

endDate.setDate(endDate.getDate() + 1);

// initialize each day with 0
const daysOfWeekCount = { 
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
};

while (startDate < endDate) {
  daysOfWeekCount[startDate.getDay()] = daysOfWeekCount[startDate.getDay()] + 1;
  startDate.setDate(startDate.getDate() + 1);
}

return daysOfWeekCount;

};