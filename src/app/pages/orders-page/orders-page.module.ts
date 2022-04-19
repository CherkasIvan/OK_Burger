import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrdersPageRoutingModule } from "./orders-page-routing.module";

import { OrdersPageComponent } from "./orders-page.component";

@NgModule({
  declarations: [OrdersPageComponent],
  imports: [CommonModule, OrdersPageRoutingModule,],
})
export class OrdersPageModule {}
