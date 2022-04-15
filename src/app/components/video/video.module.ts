import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  exports: [VideoComponent],
  imports: [CommonModule],
})
export class VideoModule {}
