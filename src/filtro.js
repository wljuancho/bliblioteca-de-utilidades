function limpiarArreglo(numeros) {
    const sinDuplicados = [...new Set(numeros)];

    return sinDuplicados.sort((a, b) => a - b);
}