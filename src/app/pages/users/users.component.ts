import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminViewComponent } from '../admin-view/admin-view.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

@ViewChild(AdminViewComponent) childRef!: AdminViewComponent;

 users = [
    { id: 1, name: "admin", },
    { id: 2, name: "drivers", },
    { id: 3, name: "riders",  },
    { id: 4, name: "partners",  },
 ]

 searchText: string = ''
 addNewAdmin: boolean = false;

 constructor(){}
  ngOnInit() {
    
  }
 
  activeIndex: number = 0;
  // activeUserData: string = this.users[0].data;

  setActive(index: number) {
    this.activeIndex = index;
    // this.activeUserData = this.users[index].data;
  }

  getRouterLink(index: number): string {
    switch(index) {
      case 0:
        return '/add-admin';
      case 1:
        return '/add-drivers';
      case 2:
        return '/add-riders';
      case 3:
        return '/add-partners';
      default:
        return '/';
    }
  }

  applySearch(){
    this.childRef.applyFilter()
  }




}
