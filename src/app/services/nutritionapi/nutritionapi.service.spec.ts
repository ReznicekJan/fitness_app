import { TestBed } from '@angular/core/testing';

import { NutritionApiService } from './nutritionapi.service';

describe('NutritionapiService', () => {
  let service: NutritionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutritionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
