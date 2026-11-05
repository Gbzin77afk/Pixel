const btnTema = document.getElementById("btnTema");

const html = document.documentElement;

let tema = localStorage.getItem("tema") || "dark";

html.setAttribute("data-bs-theme", tema);

mudarTexto();

btnTema.addEventListener("click", function() {

    if (html.getAttribute("data-bs-theme") === "dark") {
        html.setAttribute("data-bs-theme", "light");
    } else {
        html.setAttribute("data-bs-theme", "dark");
    }

    localStorage.setItem(
        "tema",
        html.getAttribute("data-bs-theme")
    );

    mudarTexto();

});

function mudarTexto() {

    if (html.getAttribute("data-bs-theme") === "dark") {
        btnTema.textContent = "Modo claro";
    } else {
        btnTema.textContent = "Modo escuro";
    }

}



function atualizarContagem() {

    const dataEvento = new Date("2026-12-20T20:00:00");

    const hoje = new Date();

    const diferenca = dataEvento - hoje;

    const campo = document.getElementById("contagem");

    if (diferenca <= 0) {
        campo.textContent = "O evento chegou!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    campo.textContent =
        dias + " dias, " +
        horas + " horas, " +
        minutos + " minutos e " +
        segundos + " segundos";

}

atualizarContagem();

setInterval(atualizarContagem, 1000);


const form = document.getElementById("formContato");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!form.checkValidity()) {

        form.classList.add("was-validated");

        return;

    }

    const nome = document.getElementById("nome").value;

    const alerta = document.getElementById("areaAlerta");

    alerta.textContent = "";

    const mensagem = document.createElement("div");

    mensagem.className = "alert alert-success mt-3";

    mensagem.textContent =
        "Obrigado, " + nome + "! Recebemos sua inscrição.";

    alerta.appendChild(mensagem);

    form.reset();

    form.classList.remove("was-validated");

});