
function scuberGreetingForFeet(ride){
 if (ride <= 400){
   return("This one is on me!");
 } else if (ride > 2000 && ride < 2500){
   return("I will gladly take your thirty bucks.");
 } else if (ride > 2500){
   return("No can do.");
 
 }
}






function ternaryCheckCity(city){
  // Write your code her
if (city === "NYC"){
  return(city ? "Ok, sounds good." : "No go.");
} else {
  return("No go.");
}
}


const tip = "generous";
function switchOnCharmFromTip(tip){
  // Write your code here!
 switch(tip){
  case "generous":
    return ("Thank you so much.");
    break;
  case "not as generous":
    return ("Thank you.");
    break;
  default:
    return ("Bye.");

 } 
}
  

