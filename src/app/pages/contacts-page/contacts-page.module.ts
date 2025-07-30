import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YandexMapModule } from 'components/yandex-map/yandex-map.module';

import { ContactsPageRoutingModule } from './contacts-page-routing.module';

import { ContactsPageComponent } from './contacts-page.component';

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [CommonModule, ContactsPageRoutingModule, YandexMapModule],
})
export class ContactsPageModule {}
