const fs = require('fs')

const faturamentoDiario = JSON.parse(fs.readFileSync('dados.json', 'utf8'));

function menorValor(faturamentoDiario) {
    let menorValor = 9999999;

    for (let diaPosicao in faturamentoDiario) {
        let valorDia = faturamentoDiario[diaPosicao].valor

        if (valorDia < menorValor && valorDia > 0) {
            menorValor = valorDia
        }
    }

    return menorValor
}

function maiorValor(faturamentoDiario) {
    let maiorValor = 0;

    for (let diaPosicao in faturamentoDiario) {
        let valorDia = faturamentoDiario[diaPosicao].valor

        if (valorDia > maiorValor) {
            maiorValor = valorDia
        }
    }

    return maiorValor
}

function medioValor(faturamentoDiario) {
    let valorTotal = 0;
    let diasValidos = 0;

    for (let diaPosicao in faturamentoDiario) {
        let valorDia = faturamentoDiario[diaPosicao].valor

        if (valorDia > 0) {
            valorTotal = valorTotal + valorDia
            diasValidos++
        }
    }

    let valorMedio = valorTotal / diasValidos;

    return valorMedio
}

function diasAcimaMedia(faturamentoDiario, valorMedio) {
    let diasPosMedia = 0;

    for (let diaPosicao in faturamentoDiario) {
        let valorDia = faturamentoDiario[diaPosicao].valor

        if (valorDia > valorMedio) {
            diasPosMedia++
        }
    }
    return diasPosMedia;
}

const valorMenor = menorValor(faturamentoDiario)
const valorMedio = medioValor(faturamentoDiario)
const valorMaior = maiorValor(faturamentoDiario)
const diasMediaUp = diasAcimaMedia(faturamentoDiario, valorMedio)

console.log(`Menor Valor: ${valorMenor}\nMaior Valor: ${valorMaior}\nValor Médio: ${valorMedio}\nDias Acima da Media: ${diasMediaUp}`)