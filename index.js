do  {
    lengthArray = parseInt(prompt('Введіть довжину масиву.'));
} while (!lengthArray)

array = [];

for (i = 1; i <= lengthArray; i++) {
    writeArray = '';
    do {
    writeArray = parseInt(prompt(`Введіть елемент масиву ${i}`));
    } while (isNaN(writeArray));
    array.push(writeArray);
}

document.write(`Введені елементи масиву - ${array}<br>`);

for (i = 0; i < array.length - 1; i++) {
    for (j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            controlArray = array[i];
            array[i] = array[j];
            array[j] = controlArray;
        }
    }
}

document.write(`Вiдсортованi елементи масиву - ${array}<br>`);
array.splice(1, 3);

document.write(`Видалення з 2 по 4 елемент масива, включно - ${array}`);
