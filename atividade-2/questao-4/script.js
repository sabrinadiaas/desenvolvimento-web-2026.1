const linhas = Number(prompt('Digite um número: '))

for (let i = 1; i <= linhas; i++) {
        let asteriscos = "";

        for (let j = 1; j <= i; j++) {
            asteriscos += "*";
        }

        console.log(asteriscos);
    }