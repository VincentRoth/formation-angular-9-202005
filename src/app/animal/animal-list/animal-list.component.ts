import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../shared/api/services/animal.service';
import { Animal } from '../../shared/api/model/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];

  constructor(private animaleService: AnimalService) {}

  ngOnInit(): void {
    this.animals = this.animaleService.getAll();
  }
}
