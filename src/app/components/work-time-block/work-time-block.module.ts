import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkTimeBlockComponent } from './work-time-block.component';

@NgModule({
  declarations: [WorkTimeBlockComponent],
  exports: [WorkTimeBlockComponent],
  imports: [CommonModule],
})
export class WorkTimeBlockModule {}
