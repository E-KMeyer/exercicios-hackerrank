let indice = 0
for ( let item of sequencia) {
    if (item === '>'){
        indice++;
    } else {
        indice--;
    }
    if ( indice < 0) {
        indice = 6;
    }else if (indice > 6) {
        indice = 0
    }
}
console.log(indice)