import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './components/header/header.module';
import { SocialMediaBtnModule } from './components/social-media-btn/social-media-btn.module';
import { FooterModule } from './components/footer/footer.module';
import { WorkTimeBlockModule } from './components/work-time-block/work-time-block.module';
import { CentralBlockModule } from './components/central-block/central-block.module';
import { LineModule } from './components/line/line.module';
import { CircleModule } from './components/circle/circle.module';

import { AboutPageModule } from './pages/about-page/about-page.module';
import { ContactsPageModule } from './pages/contacts-page/contacts-page.module';
import { OrdersPageModule } from './pages/orders-page/orders-page.module';
import { MenuPageModule } from './pages/menu-page/menu-page.module';
import { EventsPageModule } from './pages/events-page/events-page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    FooterModule,
    HeaderModule,
    LineModule,
    CircleModule,
    WorkTimeBlockModule,
    SocialMediaBtnModule,
    CentralBlockModule,
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
