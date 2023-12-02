import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentLogoutService {

  constructor(private Routes: Router) { }
  logout(){
    localStorage.setItem('student_username','none' );
    
    if(localStorage.getItem('student_username') == "none"){
    localStorage.clear()
      this.Routes.navigate(['/logout'])
    
    }else{
    return 'false';
    
    }
      } 
}
