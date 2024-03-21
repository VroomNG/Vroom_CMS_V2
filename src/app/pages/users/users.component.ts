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

  addAdmin(){
    this.addNewAdmin = !this.addNewAdmin
  }

  applySearch(){
    this.childRef.applyFilter()
  }




}
