const findLongestWord = function (string) {
  let myArray = string.split(' ');
  let longest = myArray[0];
  for (let i = 1; i <= myArray.length - 1; i += 1 ) {
    if (myArray[i].length > longest.length) {
      longest = myArray[i];
    }
  }
  return longest;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// const findLongestWord = function (string) {
//     let myArray = string.split(' ');
//     let longest = myArray[0];
//     for (let i = 1; i <= myArray.length - 1; i += 1 ) {
//         if (myArray[i].length > longest.length) {
//             longest = myArray[i];
//         }
//     }
//     return longest;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));