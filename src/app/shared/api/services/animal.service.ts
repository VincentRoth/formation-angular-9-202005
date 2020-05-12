import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      name: 'Test',
      species: 'cat',
      veterinarian: 'Panoramix',
      comment: '123 test comment',
    };
  }
}
