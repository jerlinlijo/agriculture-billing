import { Component } from '@angular/core';
import { BillingComponent } from '../home/billing/billing.component';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../home/dashboard/dashboard.component';
import { ItemsComponent } from '../home/items/items.component';

@Component({
  selector: 'app-header',
  imports: [HeaderComponent, RouterOutlet, DashboardComponent, ItemsComponent, BillingComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router,
  )  {}
  
  routeTo(route: string) {
    const routes = []
    const routeMap: { [key: string]: string } = {
      Dashboard: 'dashboard',
      Billing: 'billing',
      Items: 'items',
      Purchase: 'purchase',
    };
    routes.push(routeMap[route] || 'dashboard');
    this.router.navigate([
      'home',
      {
        outlets: {
          primary: routes,
        },
      },
    ])
  }
}
