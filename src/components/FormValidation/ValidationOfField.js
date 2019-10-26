export function deleteAllWhitespaces(value) {
  //remove all whitespaces
  return value.replace(/\s/g, "");
}

export function alphabetOnly(value) {
  //making regex expression
  let valueFormat = new RegExp(/^[A-Za-z]+$/);

  //testing if it passes test
  if (valueFormat.test(value)) {
    return true;
  } else {
    return false;
  }
}

export function firstUpperCase(value) {
  //return only first letter uppercase and rest lowercase
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
