import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard implements CanActivate {

  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    // const user = localStorage.getItem('userDetails');
    console.log('In auth guard');
    console.log('token', token);
    // console.log('userDetails', user);
    // const firstname = localStorage.getItem('firstname');
    // console.log('firstname', firstname);
    if(token){
      return true
    }
    else {
      this.router.navigate(['login'])};
       return false
    }
   
 }

