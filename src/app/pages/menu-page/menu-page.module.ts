import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuPageRoutingModule } from "./menu-page-routing.module";

import { MenuPageComponent } from "./menu-page.component";

@NgModule({
  declarations: [MenuPageComponent],
  imports: [CommonModule, MenuPageRoutingModule,],
})
export class MenuPageModule {}
