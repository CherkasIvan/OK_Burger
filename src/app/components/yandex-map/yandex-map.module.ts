import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YandexMapComponent } from './yandex-map.component';

@NgModule({
  declarations: [YandexMapComponent],
  exports: [YandexMapComponent],
  imports: [CommonModule],
})
export class YandexMapModule {}
