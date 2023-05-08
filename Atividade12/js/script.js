const imagem = document.getElementById("imagem");
const estado = document.getElementById("estado");

onload = () => {
    imagem.src = "img/janelafechada.png";
}
imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janelaaberta.png";
    estado.innerHTML = "janela aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janelafechada.png";
    estado.innerHTML = "janela fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janelaquebra.png";
    estado.innerHTML = "janela quebrada";
});


