import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './components/header/header.module';

import { AppComponent } from './app.component';

import { AboutPageModule } from './pages/about-page/about-page.module';
import { ContactsPageModule } from './pages/contacts-page/contacts-page.module';
import { OrdersPageModule } from './pages/orders-page/orders-page.module';
import { MenuPageModule } from './pages/menu-page/menu-page.module';
import { EventsPageModule } from './pages/events-page/events-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HeaderModule,
    BrowserModule,
    RouterModule,
    AboutPageModule,
    ContactsPageModule,
    OrdersPageModule,
    MenuPageModule,
    EventsPageModule,
    ContactsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
