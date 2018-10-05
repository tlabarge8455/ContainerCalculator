function add() {
    var num1 = getIntValueById('num1');
    var num2 = getIntValueById('num2');
    alert(num1 + num2);
}

function subtract() {
    var num1 = getIntValueById('num1');
    var num2 = getIntValueById('num2');
    alert(num1 - num2);
}

function getIntValueById(id) {
    return parseInt(document.getElementById(id).value)
}
