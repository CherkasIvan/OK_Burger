import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BurgerMenuModule } from '../burger-menu/burger-menu.module';

import { HeaderComponent } from './header.component';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, BurgerMenuModule],
})
export class HeaderModule {}
