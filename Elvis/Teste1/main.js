let res = document.querySelector('.resultado');
let but = document.querySelector('.botao');

but.addEventListener('click', condicao)

function condicao(){
    confirm("Escolha um número de 1 a 20, escolheu?")
    let player = window.prompt("Seu número é multiplo de 2?")
    let player1 = player.toUpperCase();
    if ((player1 === "S") || (player1 === "SIM")) {
        let player = window.prompt("Se ao somar os digitos o resultado é um número ímpar?");
        let player1 = player.toUpperCase();
        if ((player1 === "S") || (player1 === "SIM")) {
            let player = window.prompt("Seu número é um multiplo de 3?");
            let player1 = player.toUpperCase();
            if ((player1 == "S") || (player1 == "SIM")) {
                res.innerHTML = `Seu número pode ser 12 ou 18.`
            }
            else {
                res.innerHTML = `Seu número pode ser 10, 14 ou 16`
            }
        }

        else{
            let player = window.prompt("Seu número é um multiplo de 4?");
            let player1 = player.toUpperCase();
            if ((player1 == "S") || (player1 == "SIM")) {
                res.innerHTML = `Seu número pode ser 4 ou 8.`
            }
            else {
                res.innerHTML = `Seu número pode ser 2, 6 ou 20.`
            }
        }
    } 

    else {
        let player = window.prompt("Se ao somar os digitos o resultado é um número par?");
        let player1 = player.toUpperCase();
        if ((player1 === "S") || (player1 === "SIM")) {
            let player = window.prompt("Seu número é primo?");
            let player1 = player.toUpperCase();
            if ((player1 == "S") || (player1 == "SIM")) {
                res.innerHTML = `Seu número pode ser 11,13,17 ou 19.`
            }
            else {
                res.innerHTML = `Seu número é 15.`
            }
        }

        else {
            let player = window.prompt("Seu número é primo?");
            let player1 = player.toUpperCase();
            if ((player1 == "S") || (player1 == "SIM")) {
                res.innerHTML = `Seu número pode ser 1, 3, 5 ou 7.`
            }
            else {
                res.innerHTML = `Seu número é 9.`
            }
        }
    }
}