const escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();

const opcoes = ["pedra", "papel", "tesoura"];
const numeroAleatorio = Math.floor(Math.random() * 3);
const escolhaComputador = opcoes[numeroAleatorio];

console.log("Sua escolha: " + escolhaUsuario);
console.log("Escolha do computador: " + escolhaComputador);

if (escolhaUsuario === escolhaComputador) {
    console.log("Resultado: Empate!");
} else if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
) {
    console.log("Resultado: Você venceu!");
} else{
    console.log("Resultado: Você perdeu!");
}