const counterNum = document.querySelectorAll('.num-size');

const speed = 200;

counterNum.forEach((curElem) => {
    updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);

        const initialNum = parseInt(curElem.innerText);

        const incrementNumber = math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
            curElem.innerText = `${initialNum + incrementNumber} +`;
            setTimeout(updateNumber, 10)

        }
    };
    updateNumber();

});