export interface Food {
  unit: string;
  count: number;
  protein: number;
  carbs: number;
  fat: number;
  brand?: string;
  name: string;
}

export class Recipe {
  food: Food;
  count: number;
}

export const shrimp: Food = {
  unit: "g",
  count: 100,
  protein: 20.3,
  carbs: 0.9,
  fat: 1.7,
  name: "water boiled shrimp",
};

export const scallop: Food = {
  unit: "g",
  count: 100,
  protein: 16.8,
  carbs: 2.4,
  fat: 0.8,
  name: "water boiled scallop",
};

export const crab: Food = {
  unit: "g",
  count: 100,
  protein: 17.5,
  carbs: 0,
  fat: 0,
  name: "steam pacakaged crab",
};

export const seaBass: Food = {
  unit: "g",
  count: 100,
  protein: 18.4,
  carbs: 2,
  fat: 0,
  name: "steamed seabass",
};

export const egg: Food = {
  unit: "count",
  count: 1,
  protein: 6.3,
  carbs: 0,
  fat: 4.8,
  name: "steamed egg",
};

export const eggWhite: Food = {
  unit: "g",
  count: 100,
  protein: 10.9,
  carbs: 0.7,
  fat: 0.2,
  name: "packaged egg white",
};

export const sweetPatato: Food = {
  unit: "g",
  count: 100,
  protein: 1.4,
  carbs: 17.7,
  fat: 0.1,
  name: "sweet patato",
};

export const oliveOil: Food = {
  unit: "g",
  count: 4.5,
  protein: 0,
  carbs: 0,
  fat: 4.5,
  name: "olive oil",
};

export const broccoli: Food = {
  unit: "g",
  count: 100,
  protein: 2.4,
  carbs: 7.2,
  fat: 0.4,
  name: "broccoli",
};

export const napaCabbage: Food = {
  unit: "g",
  count: 100,
  protein: 1.2,
  carbs: 3.2,
  fat: 0.2,
  name: "cabbage",
};

export const banana: Food = {
  unit: "count",
  count: 1,
  protein: 1.3,
  carbs: 27,
  fat: 0.4,
  name: "banana",
};

export const yogurt: Food = {
  unit: "g",
  count: 166,
  protein: 18,
  carbs: 5,
  fat: 0,
  brand: "Face 0 fat no sugar",
  name: "yogurt",
};

export const blueberry: Food = {
  unit: "g",
  count: 100,
  protein: 0.7,
  carbs: 14.5,
  fat: 0.3,
  name: "blueberry",
};

export const wheyProtein: Food = {
  unit: "scoop",
  count: 1,
  protein: 24,
  carbs: 4,
  fat: 1.5,
  brand: "on",
  name: "protein powder",
};
