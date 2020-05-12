import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor() {}

  ngOnInit(): void {
    this.animal = {
      name: 'Test',
      species: 'cat',
      veterinarian: 'Panoramix',
      comment: '',
    };
  }
}
