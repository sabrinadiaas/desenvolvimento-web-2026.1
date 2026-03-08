const numeroSecreto = Math.floor(Math.random() * 20) + 1;

let chute;
let tentativas = 0;

while (chute !== numeroSecreto) {
    chute = Number(prompt("Adivinhe o número (1 a 20):"));

    tentativas++;

    if (chute === numeroSecreto) {
        alert("Acertou! O número era " + numeroSecreto + ". Você usou " + tentativas + " tentativas.");
    } else if (chute > numeroSecreto) {
        alert("Dica: O número secreto é menor.");
    } else {
        alert("Dica: O número secreto é maior.");
    }
}