let dadoPurificado = '';
for (let caractere of stringCorrompida) {
    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' ||
    caractere === '%' || caractere === '&' || caractere === '*' || caractere === '('||
    caractere === ')' || caractere === '.') {
        
    } else {
        dadoPurificado += caractere
    }
}  console.log(dadoPurificado)