import { Component, OnInit } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';
import { AnimalService } from '../../shared/api/services/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';
import { Veterinarian } from '../../shared/api/model/veterinarian';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  model: Animal;
  vets: Veterinarian[];

  constructor(
    private animalService: AnimalService,
    private vetService: VeterinarianService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  getVetName(vet: Veterinarian): string {
    return `${vet.firstName} ${vet.lastName}`;
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((data: { animal: Animal }) => {
      if (data.animal) {
        this.model = data.animal;
      } else {
        this.model = {
          name: null,
          species: null,
          veterinarian: null,
          comment: null,
        };
      }
    });

    this.vetService.getAll().subscribe((vets) => {
      this.vets = vets;
    });
  }

  onSubmit(): void {
    if (this.model.id) {
      this.animalService.update(this.model).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    } else {
      this.animalService.create(this.model).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    }
  }
}
