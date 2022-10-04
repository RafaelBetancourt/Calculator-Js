const displayPreviewValue = document.getElementById('preview-value');
const displayActualValue = document.getElementById('actual-value');
const buttonsNum = document.querySelectorAll('.number');
const buttonsOpe = document.querySelectorAll('.operator');

const display = new Display(displayPreviewValue, displayActualValue)

buttonsNum.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

buttonsOpe.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});