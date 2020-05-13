import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
  ],
  exports: [AnimalDetailComponent, AnimalListComponent],
  imports: [CommonModule, SharedModule],
})
export class AnimalModule {}
