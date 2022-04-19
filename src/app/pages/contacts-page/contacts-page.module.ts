import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactsPageRoutingModule } from "./contacts-page-routing.module";

import { ContactsPageComponent } from "./contacts-page.component";

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [CommonModule, ContactsPageRoutingModule],
})
export class ContactsPageModule {}
