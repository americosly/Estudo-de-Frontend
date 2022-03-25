var hoje = new Date();
var horaDeAgora = hoje.getHours();
var saudacao;

if (horaDeAgora > 18) {
    saudacao = "Boa Noite!";
} else if (horaDeAgora > 12) {
    saudacao = "Boa Tarde!";
} else if (horaDeAgora > 0) {
    saudacao = "Bom Dia!";
} else {
    saudacao = "Bem vindo!";
}

document.write('<h3>' + saudacao + '</h3>');