import { Component, OnInit } from '@angular/core';
import { Veterinarian } from '../../shared/api/model/veterinarian';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent implements OnInit {
  vets: Veterinarian[];

  constructor(private vetService: VeterinarianService) {}

  ngOnInit(): void {
    this.vetService.getAll().subscribe((vets) => {
      this.vets = vets;
    });
  }
}
