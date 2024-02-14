import {inject, Injectable} from '@angular/core';
import {nutritionResult} from "../../interfaces/nutrition.interface";
import {Router} from "@angular/router";
import {NutritionApiService} from "../nutritionapi/nutritionapi.service";

@Injectable({
  providedIn: 'root'
})

export class NutritionService {

  nutritionData?: nutritionResult;
  nameInput: string = '';
  foodInput: string = '';
  foodInputArray: string[] = [];
  showData: boolean = false;

  constructor(
      private router: Router,
      private nutritionApiService: NutritionApiService
  ) {
  }

  loadNutrition() {
    const recipe = {
      title: this.nameInput,
      ingr: this.foodInput.split(',')
    };

    this.nutritionApiService.getData(recipe).subscribe({next: (nutrition) =>
      {
        this.nutritionData = nutrition;
        this.showData = true;
      },
      error: (error) => console.error(error)
    });
  }
  getNutrientDisplay(nutrientId: string): string {
    const nutrient = this.nutritionData?.totalNutrients[nutrientId];
    if (nutrient && nutrient.quantity) {
      return `${nutrient.quantity.toFixed(2)} ${nutrient.unit}`;
    }
    return '-';
  }
  getDailyDisplay(nutrientId: string): string {
    const nutrient = this.nutritionData?.totalDaily[nutrientId];
    if (nutrient && nutrient.quantity) {
      return `${nutrient.quantity.toFixed(2)} ${nutrient.unit}`;
    }
    return '-';
  }
  showContent(): void {
    this.showData = true;
  }
}
