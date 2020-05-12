import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UppercaseDirective } from './uppercase.directive';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [UppercaseDirective, TruncatePipe],
  exports: [UppercaseDirective, TruncatePipe],
  imports: [CommonModule],
})
export class SharedModule {}
