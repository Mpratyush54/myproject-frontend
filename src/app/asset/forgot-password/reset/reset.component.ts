import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForgotPassService } from 'src/app/services/forgot-pass.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private service:ForgotPassService) { }
  data_verification:boolean = false
  userDetailsForm : FormGroup;

  ngOnInit(): void {

    this.service.details_verification(this.hash,this.username).subscribe((res)=>{
      console.log(res);
      
     if(res.status == true){
      if(res.error == false){
        this.data_verification =true
      }
     }
    });
    console.log(this.username);
    console.log(this.hash);
  }
  username = this.route.snapshot.params['username']
  hash = this.route.snapshot.params['hash']
  onSubmit(data){
    console.log(data.email);
    console.log(data);
    

}
check_data(password , confrome ){
  console.log('i was called ');
  if(password == '' || confrome == ''){



}else{
console.log(password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$'))

  if(password ==confrome ){
    // document.getElementById('password').classList.remove("ng-dirty")
    // document.getElementById('password').classList.remove("ng-touched")
    // document.getElementById('password').classList.remove("is-invalid")
    // document.getElementById('password').classList.remove("ng-invalid")

    document.getElementById('confirm_password').classList.remove("ng-dirty")
    document.getElementById('confirm_password').classList.remove("ng-touched")
    document.getElementById('confirm_password').classList.remove("is-invalid")
    document.getElementById('confirm_password').classList.remove("ng-invalid")

    // regex = “^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$” 

  }else{
    // document.getElementById('password').classList.add("ng-dirty")
    // document.getElementById('password').classList.add("ng-touched")
    // document.getElementById('password').classList.add("is-invalid")
    // document.getElementById('password').classList.add("ng-invalid")

    document.getElementById('confirm_password').classList.add("ng-dirty")
    document.getElementById('confirm_password').classList.add("ng-touched")
    document.getElementById('confirm_password').classList.add("is-invalid")
    document.getElementById('confirm_password').classList.add("ng-invalid")
    // 
     
  }
  console.log(password)
  console.log(confrome)

}
}
  
}
