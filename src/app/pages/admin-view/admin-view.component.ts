// Dependecies
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IAdmin } from 'src/app/model/admins';
import { AdminService } from 'src/app/service/admin.service';
import { UsersService } from 'src/app/service/users.service';
import * as FileSaver from 'file-saver';

// Decorator and file connector
@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
  providers: [DatePipe],
})

export class AdminViewComponent implements OnInit {
// variables
  admins: IAdmin[] = [];
  editedAdmin1: IAdmin | any;
  displayDialog: boolean = false;
  showLoader = true;
  originalData = this.admins;
  
  editedRowId: number | null = null;
  // date!: DatePipe;
  searchText:  string = '' 
  userDetails:any

  //  lifecycle and constructor
  constructor(
    private Admins: AdminService,
    private users: UsersService,
    private datePipe: DatePipe,
    // private messageService: MessageService
  ){}
  ngOnInit(): void {
    this.Admins.getAdmins().subscribe(
    (res:any)=> {
      console.log(res)
      this.admins = res.data
      this.showLoader = false;
    }
    )
  const userDetails = this.users.getStoredUserDetails();
    this.userDetails = userDetails
    // console.log('view admin', email)
    this.addAccessTrail()
  }
 

  // functions
  addAccessTrail(){
    const {email} = this.userDetails
    console.log(email)

    const userCredetials = {
      login: email,
      action: 'Viewed admins'
    }

    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        // console.log(res)
        const {message} = res
        if(message === "Success insering access"){
        //  console.log('access trail added')
         } else {
        // console.log('not added')
         }
      }
    )
  }
  applyFilter() {
    const filteredAdmins = this.admins.filter((admin) => {
      // Adjust the conditions based on your filtering requirements
      return (
        admin.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.lastname && admin.lastname.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        (admin.phone_no && admin.phone_no.toLowerCase().includes(this.searchText.toLowerCase())) ||
        admin.user_type.toString().includes(this.searchText)
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.admins = filteredAdmins;
  }

  clear() {
    this.searchText = '';
    this.Admins.getAdmins().subscribe(
      (res:any)=> {
        this.admins = res.data
        this.showLoader = false;
      }
      )
      this.admins = this.originalData
  }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.admins);
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

    editAdmin(admin: IAdmin):any {
      this.editedAdmin1 = { ...admin }; // Create a copy to avoid modifying the original data; 
      this.editedRowId = admin.id;
      this.displayDialog = true;
    }


    toggleDialog(){
        this.displayDialog = false
    }


}
