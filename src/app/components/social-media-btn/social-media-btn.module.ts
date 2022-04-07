import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaBtnComponent } from './social-media-btn.component';

@NgModule({
  declarations: [SocialMediaBtnComponent],
  exports: [SocialMediaBtnComponent],
  imports: [CommonModule],
})
export class SocialMediaBtnModule {}
