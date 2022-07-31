function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2499) {
    return 'No can do.';
  } else if (someValue >= 401) {
    return 'I will gladly take your thirty bucks.';
  }
  // Write your code here!
}

function ternaryCheckCity(someCity) {
  // Write your code here!
  return someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  switch(someTip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you." 
    default :
      return "Bye."
  }
}