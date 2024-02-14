import { Component } from '@angular/core';
import {Tab1Page} from "../tab1/tab1.page";
import {SharedDataService} from "../services/shareddata/shared-data.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nutritionData: any;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.currentData.subscribe(data => {
      this.nutritionData = data;
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
}
