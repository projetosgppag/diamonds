const input = document.querySelector('.login__input');


const checkValues = ({ target }) => {
    if (target.value.length != chars.length) {
        chars.length = 0;
        target.value = '';
    } else if (target.value == "♦♠♣♥") {
        alert('certo');
        return;
    } else if (target.value.length === 4 && target.value != "♦♠♣♥") {
        chars.length = 0;
        target.value = '';
        return;
    }
};

input.addEventListener('input', checkValues);


window.onload = () => {
    function write(frase, elemento) {
        let indiceLetra = 0;
        const intervalo = setInterval(() => {
            elemento.textContent += frase[indiceLetra];
            indiceLetra++;
            if (indiceLetra === frase.length) {
                clearInterval(intervalo);
            }
        }, 100);
    }

    const fraseParaEscrever = "Digite a senha";
    const target = document.getElementById("loginH1");

    write(fraseParaEscrever, target);
    /////////////////////////////////////////////
    const title = document.getElementById('loginH1');
    const original = 'Digite a senha';
    const shiftValue = 3;

    function caesarEncrypt(text, shift) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = (charCode - 65 + shift) % 26 + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                charCode = (charCode - 97 + shift) % 26 + 97;
            }
            result += String.fromCharCode(charCode);
        }
        return result;
    }

    const encryptedTitle = caesarEncrypt(original, shiftValue);
    let currentTitle = encryptedTitle;
    let currentIndex = 0;

    function animateCaesarTitle() {
        if (currentIndex < original.length) {
            currentTitle = currentTitle.split('');
            currentTitle[currentIndex] = original[currentIndex];
            currentTitle = currentTitle.join('');
            currentIndex++;
        }

        title.innerText = currentTitle;

        if (currentIndex < original.length) {
            setTimeout(animateCaesarTitle, 100);
        } else if (currentIndex === original.length) {
            setTimeout(() => {
                currentIndex = 0;
                currentTitle = encryptedTitle;
                animateCaesarTitle();
            }, 5000);
        }
    }

    setTimeout(animateCaesarTitle, fraseParaEscrever.length + 3000);
};