export interface nutritionResult {
  uri: string;
  yield: number;
  calories: number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: { [key: string]: NutrientInfo };
  totalDaily: { [key: string]: NutrientInfo };
  ingredients: Ingredient[];
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrientsKCal: {
    ENERC_KCAL: KCalInfo;
    PROCNT_KCAL: KCalInfo;
    FAT_KCAL: KCalInfo;
    CHOCDF_KCAL: KCalInfo;
  };
}

export interface NutrientInfo {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ingredient {
  text: string;
  parsed: ParsedIngredient[];
}

export interface ParsedIngredient {
  quantity: number;
  measure: string;
  foodMatch: string;
  food: string;
  foodId: string;
  weight: number;
  retainedWeight: number;
  nutrients: { [key: string]: NutrientInfo };
  measureURI: string;
  status: string;
}

export interface KCalInfo {
  label: string;
  quantity: number;
  unit: string;
}
