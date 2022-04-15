import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineComponent } from './line.component';

@NgModule({
  declarations: [LineComponent],
  exports: [LineComponent],
  imports: [CommonModule],
})
export class LineModule {}
