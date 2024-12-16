
function drawRace(indices, length) {
  const pistas = [];
  indices.forEach((i, index) => {
    const ancho = Array(length).fill('~');

    const position = i >= 0 ? i : length + i;

    if (position > 0 && position < length) {
      ancho[position] = 'r';
    }

    let pista = ' '.repeat(indices.length - index - 1) + ancho.join('') + ` /${index + 1}`;

    pistas.push(pista);
  });

  return pistas.join('\n');
}
