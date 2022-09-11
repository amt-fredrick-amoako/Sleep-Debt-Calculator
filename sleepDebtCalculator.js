const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 6;
    case "wednesday":
      return 7;
    case "thurday":
      return 4;
    case "friday":
      return 8;
    case "saturday":
      return 3;
    case "sunday":
      return 10;
  }
};

const getActualSleepHours = () => 8 + 6 + 7 + 4 + 8 + 3 + 10;


const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

if(actualSleepHours===idealSleepHours){
  console.log('You had a perfect amount of sleep.');
}
if(actualSleepHours > idealSleepHours){
  console.log(`You had (${actualSleepHours} - ${idealSleepHours}) hour(s) more sleep than you needed this week.`);
}
if(actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');

}
};

calculateSleepDebt();



