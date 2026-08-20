function sonAnagramas(palabra1, palabra2) {
    const texto1 = palabra1
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    const texto2 = palabra2
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    return texto1 === texto2;
}