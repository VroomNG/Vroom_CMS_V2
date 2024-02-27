import { Component , OnInit} from '@angular/core';
import { ISchedules,  } from 'src/app/model/notifications';
import { NotificationService } from 'src/app/service/notifications.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
   view_schedule: ISchedules [] = [];
   userDetails:any

   showLoader = true;
   constructor(private Notify: NotificationService, private users:UsersService){}

   ngOnInit(): void {
     this.Notify.getSchedules().subscribe(
      (res:any) =>{
       console.log(res.data);
       this.view_schedule = res.data
       this.showLoader = false;
       this.sortSchedule()
      }
     )
     const userDetails = this.users.getStoredUserDetails();
     this.userDetails = userDetails
     this.addAccessTrail()
   }
   addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)
  
    const userCredetials = {
      login: email,
      action: 'Viewed Notifications'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )
  }
   sortSchedule(){
    if(this.view_schedule){
      console.log('App drivers Exists')
     const newdata = this.view_schedule.sort((a, b) => {
        const dateA = new Date(a.sendDate).getTime();
        const dateB = new Date(b.sendDate).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }
}
