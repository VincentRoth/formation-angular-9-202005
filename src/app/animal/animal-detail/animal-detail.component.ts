import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';
import { AnimalService } from '../../shared/api/services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.get(1).subscribe((animal) => {
      this.animal = animal;
    });
  }
}
