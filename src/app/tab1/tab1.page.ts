import {Component, inject, Injectable} from '@angular/core';
import {nutritionResult} from "../interfaces/nutrition.interface";
import {Router} from "@angular/router";
import {NutritionApiService} from "../services/nutritionapi/nutritionapi.service";
import {SharedDataService} from "../services/shareddata/shared-data.service";
import { HttpErrorResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page {

  nutritionData?: nutritionResult;
  nameInput: string = '';
  foodInput: string = '';
  foodInputArray: string[] = [];
  showData: boolean = false;
  errorMessage: string = '';

  constructor(
      private router: Router,
      private nutritionApiService: NutritionApiService,
      private sharedDataService: SharedDataService,
      private navCtrl: NavController
  ) {
  }

  loadNutrition() {
    const recipe = {
      title: this.nameInput,
      ingr: this.foodInput.split(',')
    };

    this.nutritionApiService.getData(recipe).subscribe({
      next: (nutrition) => {
        this.sharedDataService.updateNutritionData(nutrition);
        this.showData = true;
        this.errorMessage = ''; // Resetujte chybovou zprávu, pokud je dotaz úspěšný
        this.navCtrl.navigateForward('/tabs/tab2');
      },
      error: (error) => {
        console.error(error); // Logování chyby pro vývojáře
        this.processError(error); // Zpracování chyby pro zobrazení v uživatelském rozhraní
      }
    });
  }

// Metoda pro zpracování a zobrazení chyby
  processError(error: HttpErrorResponse) {
    if (!error.status) {
      this.errorMessage = 'Network error or CORS issue'; // V případě, že chyba není spojená s HTTP status kódem
      return;
    }

    switch (error.status) {
      case 304:
        this.errorMessage = 'Data not modified.';
        break;
      case 404:
        this.errorMessage = 'Recipe not found.';
        break;
      case 409:
        this.errorMessage = 'ETag token mismatch.';
        break;
      case 422:
        this.errorMessage = 'Unprocessable Entity: Could not parse the recipe.';
        break;
      case 555:
        this.errorMessage = 'Recipe with insufficient quality.';
        break;
      default:
        this.errorMessage = `An unexpected error occurred (Error ${error.status}).`;
    }
  }
}
