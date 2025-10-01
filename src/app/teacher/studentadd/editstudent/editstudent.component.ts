import { Component, OnInit } from '@angular/core';
import { SignupuserService } from '../../services/signupuser.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css'],
  standalone:false
})
export class EditstudentComponent implements OnInit {
username
email
name
class
no_of_device
role
status
  constructor(private service :SignupuserService ,private route:ActivatedRoute) { }
model
  ngOnInit(): void {

    this.service.loaduser(this.route.snapshot.params['id']).subscribe((res)=>{
      console.log(res);
      
     this.model = res.mes
      this.username = res.mes.username
      this.email = res.mes.email
      this.name = res.mes.name
      this.class = res.mes.class
      this.no_of_device = res.mes.no_of_device
      this.role = res.mes.role
      this.status = res.mes.status
    })

  }
  blockuser(username){
    
  }
}
