import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsPageRoutingModule } from "./events-page-routing.module";

import { EventsPageComponent } from "./events-page.component";

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, EventsPageRoutingModule],
})
export class EventsPageModule {}
