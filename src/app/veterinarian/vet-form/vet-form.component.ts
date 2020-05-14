import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';
import { Veterinarian } from '../../shared/api/model/veterinarian';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup;

  constructor(
    private vetService: VeterinarianService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(Number(id)).subscribe((vet) => {
        this.initForm(vet);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    const formValue = this.vetForm.value;
    const vet: Veterinarian = {
      id: formValue.id as number,
      firstName: formValue.firstName as string,
      lastName: formValue.lastName as string,
    };

    if (vet.id) {
      this.vetService.update(vet).subscribe(() => {
        this.router.navigate(['/veterinarians']);
      });
    } else {
      this.vetService.create(vet).subscribe(() => {
        this.router.navigate(['/veterinarians']);
      });
    }
  }

  private initForm(
    vet: Veterinarian = {
      id: null,
      lastName: null,
      firstName: null,
    }
  ): void {
    this.vetForm = new FormGroup({
      id: new FormControl(vet.id),
      firstName: new FormControl(vet.firstName),
      lastName: new FormControl(vet.lastName),
    });
  }
}
