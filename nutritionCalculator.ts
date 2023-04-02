import {
  shrimp,
  scallop,
  crab,
  seaBass,
  egg,
  eggWhite,
  sweetPatato,
  banana,
  blueberry,
  broccoli,
  yogurt,
  oliveOil,
  napaCabbage,
  wheyProtein,
  Food,
  Recipe,
} from "./NutritionTable";

const weight = 116;
const dailyNutrition = {
  protein: 1.2 * weight,
  carbs: 1 * weight,
  fat: 0.2 * weight,
};

console.log(
  `daily nutrition: protein - ${dailyNutrition.protein}, carbs - ${dailyNutrition.carbs}, fat - ${dailyNutrition.fat}`
);

function calculateDailyNutrition(foodList: Food[], countList: number[]) {
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  for (let index = 0; index < foodList.length; index++) {
    const food = foodList[index];
    const multiplier = countList[index] / food.count;

    totalProtein = totalProtein + food.protein * multiplier;
    totalCarbs = totalCarbs + food.carbs * multiplier;
    totalFat = totalFat + food.fat * multiplier;
  }

  console.log(
    `protein: ${totalProtein}, carbs: ${totalCarbs}, fat: ${totalFat}`
  );
}

const monday: Food[] = [
  shrimp,
  broccoli,
  sweetPatato,
  oliveOil,
  banana,
  yogurt,
  blueberry,
  wheyProtein,
];

const mondayAmount = [300, 400, 170, 9, 1, 166, 100, 2];

calculateDailyNutrition(monday, mondayAmount);

const tuesday: Food[] = [
  scallop,
  broccoli,
  sweetPatato,
  oliveOil,
  banana,
  yogurt,
  blueberry,
  wheyProtein,
];

const tuesdayAmount = [350, 400, 150, 13.5, 1, 166, 100, 2];

calculateDailyNutrition(tuesday, tuesdayAmount);

const wednesday: Food[] = [
  crab,
  napaCabbage,
  sweetPatato,
  oliveOil,
  banana,
  yogurt,
  blueberry,
  wheyProtein,
];

const wednesdayAmount = [350, 600, 100, 4.5 * 4, 2, 166, 100, 2];

calculateDailyNutrition(wednesday, wednesdayAmount);

const thursday: Food[] = [
  seaBass,
  napaCabbage,
  sweetPatato,
  oliveOil,
  banana,
  yogurt,
  blueberry,
  wheyProtein,
];

const thursdayAmount = [350, 600, 190, 4.5 * 4, 1, 166, 100, 2];

calculateDailyNutrition(thursday, thursdayAmount);

const friday: Food[] = [
  eggWhite,
  egg,
  napaCabbage,
  sweetPatato,
  oliveOil,
  banana,
  yogurt,
  blueberry,
  wheyProtein,
];

const fridayAmount = [500, 1, 600, 190, 4.5 * 3, 1, 166, 100, 2];
calculateDailyNutrition(friday, fridayAmount);
