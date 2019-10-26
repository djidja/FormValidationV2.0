export function lengthOfField(value, min, max) {
  if (value.length >= min && value.length <= max) {
    return true;
  } else {
    return false;
  }
}

//this function is in separate file because of multiple uses
//we dont need to load other functions
