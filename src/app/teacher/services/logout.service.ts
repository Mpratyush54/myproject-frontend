import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private Routes: Router) { }
  logout(){
    
    localStorage.clear()

    
    if(localStorage.getItem('username') == "none" || localStorage.getItem('username') == null){
      localStorage.clear()

      this.Routes.navigate(['/logout'])
    
    }else{
    return 'false';
    
    }
      } 
}
