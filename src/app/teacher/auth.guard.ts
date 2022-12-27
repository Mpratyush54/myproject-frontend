import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private Routes: Router) {let alert_mes = "fgevcfcx"; }
  canActivate(

    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):boolean {
      const data = localStorage.getItem('data')
      const key = localStorage.getItem('username')

      if(key != null &&key != 'none' ){
        
var deData = CryptoJS.AES.decrypt(data , key)
var json = JSON.parse(decodeURIComponent(deData.toString(CryptoJS.enc.Utf8)))

      if(json.teacher_username !=null && json.tteacher_username !='none' ){
        return true;

      }else{
        this.Routes.navigate(['/login'])
        return false;
      }}else{
        this.Routes.navigate(['/login'])
        return false;
      }

  }

  }
  

