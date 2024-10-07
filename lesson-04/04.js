/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i] + str[i]);
        // str.slice(str[i], 0, str[i])
    }
    let newStr = result.join("");
    return newStr;
}
console.log(doubleEachCharacter("hello"));

