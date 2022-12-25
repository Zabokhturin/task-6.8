const consoleLog = document.querySelector('#consoleLog');

const promt = document.querySelector('#promt');

const Alert = document.querySelector('#alert');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})
promt.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})
Alert.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})