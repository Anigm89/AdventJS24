function createFrame(names) {
  const largo = Math.max(...names.map((name) => name.length));
  console.log(largo);
  const border = '*'.repeat(largo + 4);

  const line = names.map((name) => `* ${name.padEnd(largo, ' ')} *`);
  return [border, ...line, border].join('\n');
}
