function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    const dentro = row.indexOf('*');
    const ultima = row.length - 1;

    if (dentro > 0 && dentro !== ultima) {
      return true;
    }
  }

  return false;
}
