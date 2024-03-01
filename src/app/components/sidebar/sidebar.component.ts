import { Component, OnInit } from '@angular/core';
import { RouteInfo } from 'src/app/model/routesInfo';
import { ROUTES, Router } from '@angular/router';
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  constructor(private router: Router) {}

  isActive(routePath: string): boolean {
      return this.router.isActive(routePath, true);
  }

  ngOnInit() {}

  ROUTES: RouteInfo[] = [
    { id: 0, path: '/dashboard', title: 'Dashboard', icon: 'fa fa-store', class: '', children: '' },
    { id: 0.1, path: '/view-admin', title: 'Admin', icon: 'fa-solid fa-user-tie', class: '', children: [] },
    { id: 1, path: '/view-quest', title: 'Quests', icon: 'fa-solid fa-chess', class: '', children: [] },
    { id: 2, path: '/view-vehicle', title: 'Vehicle Type', icon: 'fa-solid fa-truck-monster text-primary', class: '', children: [] },
    { id: 3, path: '/view-partners', title: 'partners', icon: ' fa-solid fa-handshake text-primary', class: '', children: [] },
    { id: 4, path: '/approved-drivers', title: 'Driver', icon: 'fa-solid fa-car text-primary', class: '', children: [] },
    { id: 5, path: '/view-riders', title: 'Rider', icon: 'fa-solid fa-motorcycle text-primary', class: '', children: [] },
    { id: 6, path: '/trips', title: 'Trips', icon: 'fa-solid fa-bus', class: '', children: [] },
    { id: 7, path: '/driver-ratings', title: 'Reviews and Ratings', icon: 'fas fa-star', class: '', children: [] },
    { id: 8, path: '/cash-settlements', title: 'Settlements', icon: 'fa-solid fa-money-bill-transfer', class: '', children: [] },
    { id: 9, path: '/maps', title: 'Maps',  icon: 'fa-solid fa-location-dot text-primary', class: '', children: [] },
    { id: 10, path: '/user-profile', title: 'User profile', icon: 'fa-solid fa-user text-primary', class: '', children: [] },
    { id: 11, path: '/notifications', title: 'Notification Centre', icon: 'fa-solid fa-bell fa-shake', class: '', children: [] },
    { id: 13, path: '/reports-ref', title: 'Reports', icon: 'fa-solid fa-chart-pie text-primary', class: '', children: [] },
    { id: 14, path: '/add-charge', title: 'Surge Charge', icon: 'fa-solid fa-face-smile', class: '', children: [] },
    { id: 15, path: '/add-discount', title: 'Discount', icon: 'fa-solid fa-percent', class: '', children: [] },
    { id: 16, path: '/uninstalls', title: 'App actions', icon: 'fa-solid fa-gear', class: '', children: [] }
  ];
} 

export { ROUTES };