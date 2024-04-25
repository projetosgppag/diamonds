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

/*
deleteBtn.addEventListener('click', () => {
    chars.length = 0;
    inputText.value = chars.join('');
});
*/