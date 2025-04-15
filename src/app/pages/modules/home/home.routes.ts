import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: 'billing',
    loadComponent: () => import('./billing/billing.component').then((mod) => mod.BillingComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then((mod) => mod.DashboardComponent),
  },
  {
    path: 'items',
    loadComponent: () => import('./items/items.component').then((mod) => mod.ItemsComponent),
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
