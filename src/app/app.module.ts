import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HeaderModule } from './components/header/header.module';
import { LogoModule } from './components/logo/logo.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [HeaderModule, BrowserModule, AppRoutingModule, LogoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
