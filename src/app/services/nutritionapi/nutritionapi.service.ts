import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {nutritionResult} from "../../interfaces/nutrition.interface";

const BASE_URL = environment.baseUrl;
const API_KEY = environment.apiKey;
const API_ID = environment.apiID;

@Injectable({
  providedIn: 'root'
})
export class NutritionApiService {



  constructor(
      private http: HttpClient
  ) {
  }

  getData(recipe: { title: string; ingr: string[] }): Observable<nutritionResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      title: recipe.title,
      ingr: recipe.ingr
    };

    // Přidání query parametrů do URL
    const params = `?app_id=${API_ID}&app_key=${API_KEY}`;

    return this.http.post<nutritionResult>(`${BASE_URL}/api/nutrition-details${params}`, body, { headers });
  }
}
