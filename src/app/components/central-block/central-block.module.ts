import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralBlockComponent } from './central-block.component';
import { SocialMediaBtnModule } from '../social-media-btn/social-media-btn.module';

@NgModule({
  declarations: [CentralBlockComponent],
  exports: [CentralBlockComponent],
  imports: [CommonModule, SocialMediaBtnModule],
})
export class CentralBlockModule {}
