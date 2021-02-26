const formatString = function (string) {
  const myArray = string.split(' ');
  const wholeString = myArray.join('');
  if (wholeString.length < 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));