const faturamentoMensal = {
    "SP": '67.836,43',
    "RJ": '36.678,66,',
    "MG": '29.229,88',
    "ES": '27.165,48',
    "outros": '19.849,53'
}

console.log(faturamentoMensal)

function calculoValorTotal(faturamentoMensal) {
    let valorTotal = parseFloat(0)

    for (const estado in faturamentoMensal) {
        valorTotal = valorTotal + parseFloat(faturamentoMensal[estado])
    }

    return valorTotal;
}

const valorTotal = calculoValorTotal(faturamentoMensal)

function percentualParticipacao(faturamentoMensal, valorTotal) {
    let percentual = {}
    for (const estado in faturamentoMensal) {
        const porcentagem = Math.round((parseFloat(faturamentoMensal[estado]) / valorTotal) * 100)
        percentual[estado] = porcentagem +'%'
        // console.log(`${estado}: ${porcentagem}%`)
    }
    return percentual
}

const participacao = percentualParticipacao(faturamentoMensal, valorTotal)

console.log(participacao)