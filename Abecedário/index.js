let erros = 0;

for (let palavra of palavras) {
    const primeiraletra = palavra[0];

    if (primeiraletra !== letra) {
        erros++;
    }
}
console.log(erros);