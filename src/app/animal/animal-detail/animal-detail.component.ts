import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';
import { AnimalService } from '../../shared/api/services/animal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalService.get(Number(id)).subscribe((animal) => {
      this.animal = animal;
    });
  }
}
