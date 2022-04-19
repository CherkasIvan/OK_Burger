import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutPageRoutingModule } from "./about-page-routing.module";

import { LineModule } from "components/line/line.module";
import { CircleModule } from "components/circle/circle.module";

import { AboutPageComponent } from "./about-page.component";

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    LineModule,
    CircleModule,
    // BrowserAnimationsModule
  ],
})
export class AboutPageModule {}
