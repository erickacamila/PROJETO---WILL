var prods = '';
for (i = 0; i < db.dados.length; i++) {
    prods += `<p class="produto-item"> ${db.dados[i].titulo} <br> <img src="${db.dados[i].imagem}"> <br> ${db.dados[i].descricao} <br> R$: ${db.dados[i].preco} <br> </p>`;
}
document.getElementById('lista-produtos').innerHTML = prods;


function getLink(link) {
    window.location.href = link;
}

let o = 'ok';
console.log(o)
let b = 'bk';
console.log(b)

// Função para mostrar e ocultar o menu de login ao clicar no ícone de login
function toggleLoginMenu() {
    var loginMenu = document.getElementById("login-menu");
    // Alterna a exibição entre "block" e "none"
    if (loginMenu.style.display === "none" || loginMenu.style.display === "") {
        loginMenu.style.display = "block";
    } else {
        loginMenu.style.display = "none";
    }
}

// Fecha o menu de login se o usuário clicar fora dele
window.onclick = function(event) {
    var loginMenu = document.getElementById("login-menu");
    // Verifica se o clique foi fora do menu e do ícone
    if (!event.target.closest('#login-icon') && !event.target.closest('#login-menu')) {
        loginMenu.style.display = "none";
    }
};