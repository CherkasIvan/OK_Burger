import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./pages/team-page/team-page.module').then(
        (m) => m.TeamPageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/orders-page/orders-page.module').then(
        (m) => m.OrdersPageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu-page/menu-page.module').then(
        (m) => m.MenuPageModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events-page/events-page.module').then(
        (m) => m.EventsPageModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts-page/contacts-page.module').then(
        (m) => m.ContactsPageModule
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
