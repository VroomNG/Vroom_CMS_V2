import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users = [
    { id: 1, name: "admin", data: 'Data for User 1' },
    { id: 2, name: "drivers", data: 'Data for User 2' },
    { id: 3, name: "riders", data: 'Data for User 3' },
    { id: 4, name: "partners", data: 'Data for User 4' },
 ]

 constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  activeIndex: number = 0;
  activeUserData: string = this.users[0].data;

  setActive(index: number) {
    this.activeIndex = index;
    this.activeUserData = this.users[index].data;
  }

}
