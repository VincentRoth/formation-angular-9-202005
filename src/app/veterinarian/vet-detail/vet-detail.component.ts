import { Component, OnInit } from '@angular/core';
import { Veterinarian } from '../../shared/api/model/veterinarian';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-detail',
  templateUrl: './vet-detail.component.html',
  styleUrls: ['./vet-detail.component.scss'],
})
export class VetDetailComponent implements OnInit {
  vet: Veterinarian;

  constructor(
    private vetService: VeterinarianService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vetService.get(Number(id)).subscribe((vet) => {
      this.vet = vet;
    });
  }
}
