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

 constructor(){}
  ngOnInit() {
    
  }
 
  activeIndex: number = 0;
  // activeUserData: string = this.users[0].data;

  setActive(index: number) {
    this.activeIndex = index;
    // this.activeUserData = this.users[index].data;
  }


  // clickMe(){
  //   // connect me to a child component
  //   this.childRef.clickMe();
  //   this.searchText = "changed by child";
  // }

  applySearch(){
    this.childRef.applyFilter()
  }




}
