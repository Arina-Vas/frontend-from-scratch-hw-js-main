/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let number = 1;
let result;
while (number <= 20) {
  result = number % 2;
  if (result !== 0) {
    sum += number;
  }
  number++;
}
console.log(sum);
