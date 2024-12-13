
function fixPackages(packages) {

  while (packages.includes('(')) {
    const abierto = packages.lastIndexOf('(');
    const cerrado1 = packages.indexOf(')', abierto);

    const dentro = packages.slice(abierto + 1, cerrado1);
    const rever = dentro.split('').reverse().join('');

    packages =
      packages.slice(0, abierto) + rever + packages.slice(cerrado1 + 1);
  }

  return packages;
}
