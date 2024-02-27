import { Component, OnInit } from '@angular/core';
import { IReferal } from 'src/app/model/reports';
import { ReportService } from 'src/app/service/reports.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-reports-ref',
  templateUrl: './reports-ref.component.html',
  styleUrls: ['./reports-ref.component.scss']
})
export class ReportsRefComponent implements OnInit {
 
  referal: IReferal[] = [];
  showLoader = true; 
  userDetails:any

 constructor(private Reports: ReportService, private users:UsersService ){}

  ngOnInit(): void {
    this.Reports.getReferal().subscribe(
      (res:any)=> {
        console.log(res.data)
        this.showLoader = false;
        this.referal = res.data
        this.sortReferals()
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
      action: 'Viewed Report Reference'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  sortReferals(){
    if(this.referal){
      console.log('App drivers Exists')
     const newdata = this.referal.sort((a, b) => {
        const dateA = new Date(a.created_at).getTime();
        const dateB = new Date(b.created_at).getTime();
        return dateB - dateA;
      });
      console.log('sorted array',newdata)
    }
    }
  
}
