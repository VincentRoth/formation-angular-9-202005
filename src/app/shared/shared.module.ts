import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UppercaseDirective } from './uppercase.directive';
import { TruncatePipe } from './truncate.pipe';
import { TimeInterceptor } from './time.interceptor';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UppercaseDirective, TruncatePipe],
  exports: [UppercaseDirective, TruncatePipe, TranslateModule],
  imports: [CommonModule, HttpClientModule, TranslateModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
