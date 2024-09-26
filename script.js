const texts = [
    "Desenvolvedor Web",
    "Criação de Sites",
    "Criação de Apps Android"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetweenTexts = 2000; // Tempo de pausa entre as frases

const typingElement = document.getElementById("typing");

function type() {
    // Atualiza o texto atual
    if (!isDeleting && charIndex <= texts[index].length) {
        currentText = texts[index].substring(0, charIndex);
        typingElement.innerHTML = currentText + '<span class="blinking-cursor"></span>';
        charIndex++;
    } 
    // Deletando o texto
    else if (isDeleting && charIndex > 0) {
        currentText = texts[index].substring(0, charIndex - 1);
        typingElement.innerHTML = currentText + '<span class="blinking-cursor"></span>';
        charIndex--;
    }

    // Se o texto foi completamente digitado, inicia a deleção
    if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => {
            isDeleting = true;
        }, pauseBetweenTexts);
    }
    
    // Se o texto foi completamente deletado, passa para o próximo
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Ciclo contínuo entre os textos
    }

    // Ajusta a velocidade do typing/deleting
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
}

// Inicia a função de digitação
type();
