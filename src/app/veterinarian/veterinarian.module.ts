import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VetRootComponent } from './vet-root/vet-root.component';
import { VetDetailComponent } from './vet-detail/vet-detail.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VetRootComponent,
    VetDetailComponent,
    VetListComponent,
    VetFormComponent,
  ],
  imports: [
    CommonModule,
    VeterinarianRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class VeterinarianModule {}
