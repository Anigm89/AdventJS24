function createXmasTree(height, ornament) {
  const ancho = '_'.repeat(height - 1);
  const tronco = ancho + '#' + ancho;

  let arbol = '';
  for (let i = 0; i < height; i++) {
    const espacios = '_'.repeat(height - i - 1);
    const adornos = ornament.repeat(2 * i + 1);
    arbol += espacios + adornos + espacios + '\n';
  }

  return arbol + [tronco, tronco].join('\n');
}
