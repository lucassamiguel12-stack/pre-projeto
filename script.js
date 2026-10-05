// Botão para voltar ao topo

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Destacar o link do menu conforme a seção

const secoes = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop - 150;

        if (window.scrollY >= topo) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "#123d5c";

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.style.color = "#1d78ad";
        }

    });

});