import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/service/map.service';
import { IMapList } from 'src/app/model/maps';
// import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { UsersService } from 'src/app/service/users.service';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  maplist!: IMapList | any;
  userDetails:any

  constructor(
    private MapService: MapService, private users:UsersService
  ){}

  ngOnInit() {
    let map = document.getElementById('map-canvas');
    // let lat = map.getAttribute('data-lat');
    // let lng = map.getAttribute('data-lng');

    // var myLatlng = new google.maps.LatLng(lat, lng);
    // var mapOptions = {
    //     zoom: 12,
    //     scrollwheel: false,
    //     center: myLatlng,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     styles: [
    //       {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
    //       {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
    //       {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
    //       {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
    //       {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
    //       {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
    //       {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
    //       {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
    // }

    // map = new google.maps.Map(map, mapOptions);

    // var marker = new google.maps.Marker({
    //     position: myLatlng,
    //     map: map,
    //     animation: google.maps.Animation.DROP,
    //     title: 'Hello World!'
    // });

    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
        '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    this.MapService.getMapList().subscribe(
      (res:any)=> {
        console.log(res.data);
        this.maplist = res.data[0]
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
      action: 'Viewed Maps'
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
