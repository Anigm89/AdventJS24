function organizeShoes(shoes) {
  const dchos = shoes.filter((shoe) => shoe.type === 'R');
  const izqs = shoes.filter((shoe) => shoe.type === 'I');

  const pares = [];

  izqs.forEach((izq) => {
    const coincide = dchos.findIndex((dcho) => dcho.size === izq.size);

    if (coincide !== -1) {
      pares.push(izq.size);
      dchos.splice(coincide, 1);
    }
  });

  return pares;
}
