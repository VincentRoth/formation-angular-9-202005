import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'animals',
    pathMatch: 'full',
  },
  {
    path: 'veterinarians',
    loadChildren: () =>
      import('./veterinarian/veterinarian.module').then(
        (tsModule) => tsModule.VeterinarianModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
