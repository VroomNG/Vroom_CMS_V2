import { Component , OnInit} from '@angular/core';
// import { MockdataService } from 'src/app/data/mockdata.service';
import { dashboardInfo,IDashboard  } from 'src/app/model/dashboardInfo';
import { IChart_data } from 'src/app/model/dashboardInfo';
import { ChartService } from 'src/app/service/chart.service';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  chart: IChart_data[] = [];
  dashbaord_data: any;

  constructor(
    private Chart: ChartService,
    private Dashboard: DashboardService
    ) { }
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    
    this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','october', 'November','December'],
        datasets: [
            {
                label: 'Registered Users for this year',
                backgroundColor: documentStyle.getPropertyValue('--brand900'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [6, 3, 5, 24, 259, 8, 5,0,0,2,5,0]
            },
          
        ]
    };

    this.Chart.getChartData().subscribe(
        (res:any)=>{
            console.log(res)
            this.chart = res.data
        }
    )

    this.Dashboard.getDashboardData().subscribe(
        (res:any)=>{
            console.log(res)
            this.dashbaord_data = res.data

        }
    )

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }

        }
    };
}

  // dashboard_data = this.mockDataService.dashboard_data
//   IDashboard = dashboardInfo;
//   dashboard: dashboardInfo [] = [
//     {
//       id:1,
//       title: 'RIDERS',
//       Number:654, 
//       isThismonth: false,
//    },
//     {
//       id:2,
//       title: 'DRIVERS',
//       Number:156, 
//       isThismonth: false,
//    },
//     {
//       id:3,
//       title: 'VEHICLES',
//       Number:3, 
//       isThismonth: false,
//    },
//     {
//       id:4,
//       title: 'COMPLETED TRIPS',
//       Number:0, 
//       isThismonth: false,
//    },
//     {
//       id:5,
//       title: 'TOTAL TRIPS',
//       Number:0, 
//       isThismonth: false,
//    },
//     {
//       id:6,
//       title: 'TOTAL TRIP PAYMENT',
//       Number: 17518000, 
//       isThismonth: false,
//    },
//     {
//       id:7,
//       title: 'TOTAL TRIP COMMISION',
//       Number: 453200, 
//       isThismonth: false,
//    },
//     {
//       id:8,
//       title: 'TOTAL DRIVER EARNED',
//       Number: 96074300, 
//       isThismonth: false,
//    },
  

//   ]
}
