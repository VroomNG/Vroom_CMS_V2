import { Component, OnInit } from '@angular/core';
import { IDiscount } from 'src/app/model/discountInfo';
import { DiscountService } from 'src/app/service/discount.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

 discount: IDiscount [] = [];
 showLoader = true;
 userDetails:any

 constructor(private Discount: DiscountService, private users:UsersService){}
 ngOnInit(): void {
   this.Discount.getDiscounts().subscribe(
    (res:any)=>{
      console.log(res.data)
      this.discount = res.data;
      this.showLoader = false
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
    action: 'Viewed Discount'
  }

  this.users.addAccesstrail(userCredetials).subscribe(
    (res:any)=>{
      const {message} = res
      if(message === "Success insering access"){
       } else {}
    }
  )
}


}
