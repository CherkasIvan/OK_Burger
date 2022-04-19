import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimationDataEnum } from 'constants/animations/animation-data-enum';
import { PreloadStrategyService } from './service/preload-strategy/preload-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
    data: { animation: [AnimationDataEnum.mainPage], preload: true },
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
    data: { animation: [AnimationDataEnum.aboutPage] },
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./pages/team-page/team-page.module').then(
        (m) => m.TeamPageModule
      ),
    data: { animation: [AnimationDataEnum.teamPage] },
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders-page/orders-page.module').then(
        (m) => m.OrdersPageModule
      ),
    data: { animation: [AnimationDataEnum.ordersPage] },
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu-page/menu-page.module').then(
        (m) => m.MenuPageModule
      ),
    data: { animation: [AnimationDataEnum.menuPage] },
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events-page/events-page.module').then(
        (m) => m.EventsPageModule
      ),
    data: { animation: [AnimationDataEnum.eventsPage] },
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts-page/contacts-page.module').then(
        (m) => m.ContactsPageModule
      ),
    data: { animation: [AnimationDataEnum.contactsPage], preload: true },
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
    data: { animation: [AnimationDataEnum.mainPage], preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: PreloadStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
