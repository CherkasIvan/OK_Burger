import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [CommonModule, LogoModule],
})
export class HeaderModule {}
