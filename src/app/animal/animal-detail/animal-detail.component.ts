import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { animal: Animal }) => {
      this.animal = data.animal;
    });
  }
}
