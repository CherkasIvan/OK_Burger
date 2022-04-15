import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { BurgerMenuModule } from '../burger-menu/burger-menu.module';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, BurgerMenuModule],
})
export class HeaderModule {}
