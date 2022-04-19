import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPageComponent } from './menu-page.component';

const routes: Routes = [{ path: '', component: MenuPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuPageRoutingModule { }
