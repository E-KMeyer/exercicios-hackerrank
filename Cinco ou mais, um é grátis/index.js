function solucao(precos) {
let soma = 0;
for (let preco of precos) {
    soma += preco;
}

if (precos.length >= 5) {
    let menor = precos[0];
    for (let itemAtual of precos){
        if (itemAtual < menor) {
            menor = itemAtual;
        }
    }
    console.log(soma - menor)        
}else 
console.log(soma)
}