class Meal {
  constructor(
    id,
    categorysId,
    title,
    affordablity,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutanFree,
    isVegan,
    isVegeterian,
    isLoctoseFree,
  ) {
    this.id = id;
    this.categorysId = categorysId;
    this.title = title;
    this.affordablity = affordablity;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutanFree = isGlutanFree;
    this.isVegan = isVegan;
    this.isVegeterian = isVegeterian;
    this.isLoctoseFree = isLoctoseFree;
  }
}

export default Meal;
