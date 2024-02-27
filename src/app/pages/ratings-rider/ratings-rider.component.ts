import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { IRatings_R } from 'src/app/model/ridersinfo';
import { RiderService } from 'src/app/service/riders.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-ratings-rider',
  templateUrl: './ratings-rider.component.html',
  styleUrls: ['./ratings-rider.component.scss']
})
export class RatingsRiderComponent implements OnInit {

 constructor(
  private Riders: RiderService, private users:UsersService 
  ){}

  riders: IRatings_R [] | any;
  viewRatings: IRatings_R | any;
  deleteRowId: number | null = null;
  showLoader = true;
  searchText:string = ''
  userDetails:any

  ngOnInit(): void {
    this.Riders.getRidersRatings().subscribe(
      (res:any)=> {
        console.log(res);
        this.riders = res.data;
        this.showLoader = false;
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
      action: 'Viewed Rider Ratings'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  applyFilter() {
    const filteredAdmins = this.riders.filter((item:any) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.lastname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) 
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.riders = filteredAdmins;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.riders);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'admins');
    });

}
saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
  clear(){
    this.searchText = '',
    location.reload()
  }
  deleteRider(riders:any){
    this.riders = { ...riders }; // Create a copy to avoid modifying the original data; 
    this.deleteRowId = riders.id;
    
    let riderId = this.deleteRowId
    window.alert(riderId)
    this.Riders.deleteRiderReview(riderId).subscribe(
      (res:any)=>{
        console.log(res);
          window.alert('Successfully deleted')
          location.reload()
      }
    )
  }

}
