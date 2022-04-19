import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainPageRoutingModule } from "./main-page-routing.module";

import { SocialMediaBtnModule } from "components/social-media-btn/social-media-btn.module";
import { CentralBlockModule } from "components/central-block/central-block.module";
import { WorkTimeBlockModule } from "components/work-time-block/work-time-block.module";
import { VideoModule } from "components/video/video.module";

import { MainPageComponent } from "./main-page.component";

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SocialMediaBtnModule,
    CentralBlockModule,
    MainPageRoutingModule,
    WorkTimeBlockModule,
    VideoModule,
  ],
})
export class MainPageModule {}
