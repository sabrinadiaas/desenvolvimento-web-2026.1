const precoGasolina = 6.40;
const precoEtanol = 5.20;
const precoDiesel = 5.80;

// conversão para arrow function
const atualizarValor = () => {
    let tipo = document.getElementById("combustivel").value;
    let litrosInput = document.getElementById("litros").value;
    let litros = parseFloat(litrosInput);
    let precoPorLitro;

    // substituição do switch
    const tabelaPrecos = {
        "gasolina": precoGasolina,
        "etanol": precoEtanol,
        "diesel": precoDiesel
    };

    precoPorLitro = tabelaPrecos[tipo];

    if (!precoPorLitro) {
        console.log("Escolha uma opção");
        return;
    }

    // validação antes de calcular
    if (litrosInput.trim() === "") {
        document.getElementById("resultado").textContent = "O campo está vazio!";
        return;
    }

    if (isNaN(litros) || litros <= 0) {
        document.getElementById("resultado").textContent = "Insira um número válido e positivo";
        return;
    }

    calcularValorAbastecimento(precoPorLitro, litros);
};

// conversão para arrow function
const calcularValorAbastecimento = (precoCombustivel, litros) => {
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = `Valor: ${formatarMoeda(valorTotal)}`;
};

// eventos
let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

let litrosInput = document.getElementById("litros");
litrosInput.addEventListener("input", atualizarValor);

// função keydown convertida para arrow function
litrosInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault(); 
        atualizarValor();
    }
});

// conversão para arrow function
const formatarMoeda = (valor) => {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
};