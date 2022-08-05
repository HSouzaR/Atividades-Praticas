// Inverter string

function inverter(string) {
    const cadaCaractere = string.split('');

    let inverso = '';

    for (let posicaoVet = cadaCaractere.length - 1; posicaoVet >= 0; posicaoVet--) {
        inverso = inverso + cadaCaractere[posicaoVet];
    }

    return inverso
}

console.log(inverter('Testando'))