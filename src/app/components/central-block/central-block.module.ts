import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaBtnModule } from '../social-media-btn/social-media-btn.module';
import { LineModule } from '../line/line.module';

import { CentralBlockComponent } from './central-block.component';

@NgModule({
  declarations: [CentralBlockComponent],
  exports: [CentralBlockComponent],
  imports: [CommonModule, SocialMediaBtnModule, LineModule],
})
export class CentralBlockModule {}
