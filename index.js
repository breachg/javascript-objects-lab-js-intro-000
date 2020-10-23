var recipes = {
  eggs: 3,
  water: '1/2 cup',
  bacon: '2 slices',
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  Object.assign({}, recipes, {[key]: value})
  return recipes
}
