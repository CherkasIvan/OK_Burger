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

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDM6AqXf-wsBQ_YBy90PPBRA7giOahUow0',
  authDomain: 'ok-burger.firebaseapp.com',
  projectId: 'ok-burger',
  storageBucket: 'ok-burger.appspot.com',
  messagingSenderId: '355621971833',
  appId: '1:355621971833:web:1533868a45ffb18258f1a8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
