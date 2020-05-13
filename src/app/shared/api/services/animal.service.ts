import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  getAll(): Animal[] {
    return [
      {
        name: 'Test',
        species: 'cat',
        veterinarian: 'Panoramix',
        comment: '123 test comment',
      },
      {
        name: 'Test2',
        species: 'dog',
        veterinarian: 'Panoramix',
        comment: '123 test comment bis',
      },
      {
        name: 'Test3',
        species: 'dog',
        veterinarian: 'Panoramix',
        comment: '123 test comment bis',
      },
    ];
  }

  get(): Animal {
    return {
      name: 'Test',
      species: 'cat',
      veterinarian: 'Panoramix',
      comment: '123 test comment',
    };
  }
}
