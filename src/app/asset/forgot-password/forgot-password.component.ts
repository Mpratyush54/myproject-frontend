import { Component, OnInit } from '@angular/core';
import { ForgotPassService } from 'src/app/services/forgot-pass.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone:false
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private service:ForgotPassService) { }

  ngOnInit(): void {
  }
  onSubmit(data){
      console.log(data.email);
      console.log(data);
      
   this.service.mail(data.email).subscribe((res)=>{
     
  });
  }
}
