const checkForSpam = function (message) {
  const newArray = message.toLowerCase();
  if (newArray.includes('spam') || newArray.includes('sale')) {
    return true;
  }
  return false;
}
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Latest technology news'));