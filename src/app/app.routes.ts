import { Routes } from '@angular/router';
import { HOME_ROUTES } from './pages/modules/home/home.routes';
import { HomeComponent } from './pages/modules/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    children: HOME_ROUTES,
    loadComponent: () => import('./pages/modules/home/home.component').then((mod) => mod.HomeComponent),
  },
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./module/home/dashboard/dashboard.component').then((mod) => mod.DashboardComponent),
  // },
  // {
  //   path: 'billing',
  //   loadComponent: () => import('./module/home/billing/billing.component').then((mod) => mod.BillingComponent),
  // },
  // {
  //   path: 'items',
  //   loadComponent: () => import('./module/home/items/items.component').then((mod) => mod.ItemsComponent),
  // },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
