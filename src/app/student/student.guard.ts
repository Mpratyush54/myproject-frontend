import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})

export class StudentGuard implements CanActivate {
  constructor(private Routes: Router ,) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
const data = localStorage.getItem('data')
const key = localStorage.getItem('username')

if(key !=null && key != 'none'){
  
var deData = CryptoJS.AES.decrypt(data , key)

var json = JSON.parse(decodeURIComponent(deData.toString(CryptoJS.enc.Utf8)))
if(json){
      if(json.student_username !=null && json.student_username !='none' ){
        return true;

      }else{
        this.Routes.navigate(['/login'])
        return false;
      }
  }else{
    this.Routes.navigate(['/login'])
    return false;
  }}else{
    this.Routes.navigate(['/login'])
    return false;
  }
}
}
