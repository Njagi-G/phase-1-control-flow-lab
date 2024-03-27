//Question 1: Using if...else if conditional statement

let feet = 500;

function scuberGreetingForFeet(feet){

  if (feet<=400) {
    return "This one is on me!";
  }else if (feet>400 && feet<=2000) {
    return "That will be twenty bucks.";
  }else if (feet>2000 && feet<=2500) {
    return "I will gladly take your thirty bucks.";
  }else {
    return "No can do.";
  }
  }

scuberGreetingForFeet(feet);

console.log(scuberGreetingForFeet(feet));



//Question 2: Using ternary expression

const city = "NYC";

function ternaryCheckCity(city){

  return city==="NYC" ? "Ok, sounds good." : "No go.";

} 

console.log(ternaryCheckCity(city));

console.log(ternaryCheckCity(!city));



//Question 3: Using switch statement

const tip="not as generous";

let message;

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }

}

switchOnCharmFromTip(tip);

console.log(switchOnCharmFromTip(tip));
