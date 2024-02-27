import { Component, OnInit } from '@angular/core';
import {IVehicleType } from 'src/app/model/vehicleInfo';
import { VehicleService } from 'src/app/service/vehicle.service';
import * as FileSaver from 'file-saver';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss']
})
export class VehicleTypeComponent implements OnInit {
  
  vehicleType: IVehicleType [] = [];
  originalData = this.vehicleType;
  loaderColor!: 'primary';
  showLoader = true;
  searchText: string = '';
  userDetails:any


  constructor(
    private Vehicles : VehicleService,
    private users: UsersService

  ){

  }
  ngOnInit(): void {
    this.Vehicles.getVehicles().subscribe(
      (res:any) => {
        console.log(res.data)
        this.vehicleType = res.data;
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
      action: 'Viewed Vehicle Type'
    }
  
    this.users.addAccesstrail(userCredetials).subscribe(
      (res:any)=>{
        const {message} = res
        if(message === "Success insering access"){
         } else {}
      }
    )}

  clear() {
    this.searchText = '';
    this.Vehicles.getVehicles().subscribe(
      (res:any) => {
        console.log(res.data)
        this.vehicleType = res.data;
        this.showLoader = false;
      }
    )
      this.vehicleType = this.originalData
  }

  applyFilter() {
    const filteredAdmins = this.vehicleType.filter((item) => {
      // Adjust the conditions based on your filtering requirements
      return (
      item.vehicle_type.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.trip_type.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
    // Update the table data with the filtered results
    // If you are using server-side filtering, you may need to call an API here
    this.vehicleType = filteredAdmins;
  }
    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.vehicleType);
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


}
