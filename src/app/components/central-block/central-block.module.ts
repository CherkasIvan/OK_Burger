import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralBlockComponent } from './central-block.component';

import { SocialMediaBtnModule } from '../social-media-btn/social-media-btn.module';
import { LineModule } from '../line/line.module';

@NgModule({
  declarations: [CentralBlockComponent],
  exports: [CentralBlockComponent],
  imports: [CommonModule, SocialMediaBtnModule, LineModule],
})
export class CentralBlockModule {}
