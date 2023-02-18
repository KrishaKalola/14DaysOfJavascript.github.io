const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Krisha :)";
    }, 0);
    setTimeout(() => {
        text.textContent = "Programmer.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Creative.";
    }, 8000); 
    setTimeout(() => {
        text.textContent = "Coder.";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000);