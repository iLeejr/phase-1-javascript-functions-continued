function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }
  console.log(saturdayFun())
  console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())
console.log(mondayWork("work from home"))

function wrapAdjective(activity = "*") {
    return function(adjective = "special") {
        return `You are ${activity}${adjective}${activity}!`;
      };
    }
      
    