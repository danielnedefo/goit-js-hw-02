let message = +prompt('Введите число');
let input = 0;
let numbers = [];
numbers.push(message);
if (Number.isNaN(message)) {
    alert('Было введено не число, попробуйте еще раз')
  }
while (message) {
  message = +prompt('Введите число');
  numbers.push(message);
}
numbers.pop();
let total = 0;
for (const elementNumber of numbers) {
  total += elementNumber;
}
if (!Number.isNaN(message)) {
  alert(`Общая сумма чисел равна ${total}`)
}
