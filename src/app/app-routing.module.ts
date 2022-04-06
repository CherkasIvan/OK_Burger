import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/',
  //   pathMatch: 'full'
  // },
  {
    path: 'about-page',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'team-page',
    loadChildren: () =>
      import('./pages/team-page/team-page.module').then(
        (m) => m.TeamPageModule
      ),
  },
  {
    path: 'orders-page',
    loadChildren: () =>
      import('./pages/orders-page/orders-page.module').then(
        (m) => m.OrdersPageModule
      ),
  },
  {
    path: 'menu-page',
    loadChildren: () =>
      import('./pages/menu-page/menu-page.module').then(
        (m) => m.MenuPageModule
      ),
  },
  {
    path: 'events-page',
    loadChildren: () =>
      import('./pages/events-page/events-page.module').then(
        (m) => m.EventsPageModule
      ),
  },
  {
    path: 'contacts-page',
    loadChildren: () =>
      import('./pages/contacts-page/contacts-page.module').then(
        (m) => m.ContactsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
