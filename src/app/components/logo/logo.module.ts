import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@NgModule({
  exports: [LogoComponent],
  declarations: [LogoComponent],
  imports: [CommonModule],
})
export class LogoModule {}
