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
    const textoOriginal = "Digite a senha";

    setInterval(() => {
        const randomText = () => {
            let texto = "";
            for (let i = 0; i < textoOriginal.length; i++) {
                texto += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            }
            return texto;
        };

        target.textContent = randomText();

        setTimeout(() => {
            target.textContent = textoOriginal;
        }, 50);
    }, 3000);
};