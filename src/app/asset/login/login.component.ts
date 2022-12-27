import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service :LoginService,private Routes:Router) { }

  ngOnInit(): void {
  }
  onSubmit(data){
    
    event.preventDefault();
  
  
  var statuss = data["username"];
   var change = data["password"];
   
  
   this.service.verifyusernamepass(statuss, change).subscribe((res)=>{
     
  });
  
  
  
     
  }
  navigate(data){
    this.Routes.navigateByUrl(data)
  }
}
