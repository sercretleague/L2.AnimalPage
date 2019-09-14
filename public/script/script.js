let arr = ['dad','vasya','domishek','valera','petya','faf','petushok'];
function allLongestStrings(arr) {
    let number = 0;
    //Ищем самое длинное слово
    for (let i = 0; i < arr.length; i++) {
        if (number < arr[i].length) {
            number = arr[i].length;
        }
    }
    let newArr = [];
    //Добавляем в новый массив все слова с максимальной длинной
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == number) {
            newArr.push(arr[i])
        }
    }
    alert(newArr);
}
allLongestStrings(arr);