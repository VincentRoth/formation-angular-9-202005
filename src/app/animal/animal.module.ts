import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalItemComponent } from './animal-item/animal-item.component';
import { AnimalRootComponent } from './animal-root/animal-root.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalDetailComponent,
    AnimalListComponent,
    AnimalItemComponent,
    AnimalRootComponent,
    AnimalFormComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule, FormsModule],
})
export class AnimalModule {}
