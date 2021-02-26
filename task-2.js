const calculateEngravingPrice = function (message, pricePerWord) {
  const myArray = message.split(' ');
  const priceWhole = myArray.length * pricePerWord;
  return priceWhole;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10));