function organizeInventory(inventory) {
  const categorias = inventory.reduce((result, item) => {
    if (!result[item.category]) {
      result[item.category] = {};
    }

    if (result[item.category][item.name]) {
      result[item.category][item.name] += item.quantity;
    } else {
      result[item.category][item.name] = item.quantity;
    }
    return result;
  }, {});

  return categorias;
}
