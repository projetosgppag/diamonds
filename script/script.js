const input = document.querySelector('.login__input');

const checkValues = ({ target }) => {
    if (target.value.length != chars.length) {
        chars.length = 0;
        target.value = '';
    } else if (target.value == "♦♠♣♥") {
        window.location.href = "end.html"
        return;
    } else if (target.value.length === 4 && target.value != "♦♠♣♥") {
        chars.length = 0;
        target.value = '';
        return;
    }
};

input.addEventListener('input', checkValues);