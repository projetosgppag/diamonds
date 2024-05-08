const buttons = document.querySelectorAll('.btn');
const inputText = document.querySelector('.login__input');
const deleteBtn = document.querySelector('.delete');
let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        chars.push(btn.innerText);
        inputText.value = chars.join('');
        inputText.dispatchEvent(new Event('input'));
    });
});


const colors = ['rgb(218, 115, 115, 0.6)', 'rgb(151, 225, 151, 0.6)', 'rgb(244, 166, 205, 0.6)', 'rgb(158, 201, 233, 0.6)'];
let count = 0;

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.style.color = 'black';
        btn.style.backgroundColor = colors[index];
        count++;

        if (count === 4) {
            count = 0;
            buttons.forEach((btn, index) => {
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
                btn.style.color = '#fff';
            });
        }
    });
});