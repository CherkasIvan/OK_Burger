import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TeamPageRoutingModule } from "./team-page-routing.module";

import { LineModule } from "components/line/line.module";

import { TeamPageComponent } from "./team-page.component";

@NgModule({
  declarations: [TeamPageComponent],
  imports: [CommonModule, TeamPageRoutingModule, LineModule],
})
export class TeamPageModule {}
