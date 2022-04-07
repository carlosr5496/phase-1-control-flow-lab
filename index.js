function scuberGreetingForFeet(totalFeet){
  let result
  if (totalFeet <= 400) {
    result = "This one is on me!";
    return result
  }
  else if (totalFeet > 400 && totalFeet < 2000) {
    result = 'That will be twenty bucks.';
    return result
  }
  else if (totalFeet > 2000 && totalFeet < 2500) {
    result = 'I will gladly take your thirty bucks.';
    return result
  }
  else 
    result = 'No can do.';
    return result
}

function ternaryCheckCity(city) {
  let isCity;
  city === "NYC" ? (isCity = 'Ok, sounds good.') : (isCity = "No go.");
  return isCity
}

function switchOnCharmFromTip(tip) {
  let charm;
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break;
      case 'not as generous':
        charm = 'Thank you.';
        break;
        default :
        charm = "Bye.";
  }
  return charm
}
