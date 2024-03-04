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
    { id: 0.1, path: '/users', title: 'Users', icon: 'fa-solid fa-user-tie', class: '', children: [] },
    { id: 1, path: '/view-quest', title: 'Trips', icon: 'fa-solid fa-chess', class: '', children: [] },
    { id: 2, path: '/view-vehicle', title: 'Vehicles', icon: 'fa-solid fa-truck-monster text-primary', class: '', children: [] },
    { id: 3, path: '/view-partners', title: 'Review and Ratings', icon: ' fa-solid fa-handshake text-primary', class: '', children: [] },
    { id: 4, path: '/approved-drivers', title: 'Activity log', icon: 'fa-solid fa-car text-primary', class: '', children: [] },
    { id: 5, path: '/view-riders', title: 'Explore', icon: 'fa-solid fa-motorcycle text-primary', class: '', children: [] },
    { id: 6, path: '/trips', title: 'App Actons', icon: 'fa-solid fa-bus', class: '', children: [] },
  
  ];
} 

export { ROUTES };