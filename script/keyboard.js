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


const colors = ['rgb(218, 115, 115)', 'rgb(151, 225, 151)', 'rgb(244, 166, 205)', 'rgb(158, 201, 233)'];
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.style.color = 'black';
        btn.style.backgroundColor = colors[index];
    });
});

/*
deleteBtn.addEventListener('click', () => {
    chars.length = 0;
    inputText.value = chars.join('');
});
*/