import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private nutritionData = new BehaviorSubject<any>(null);
  currentData = this.nutritionData.asObservable();

  constructor() { }

  updateNutritionData(data: any) {
    this.nutritionData.next(data);
  }
}
