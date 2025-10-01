import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupuserService } from '../../services/signupuser.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone:false
})
export class IndexComponentStudent implements OnInit {

  constructor(private Routes : Router , private service :SignupuserService) { }
  data:any 
  ngOnInit(): void {
    this.service.loadindex().subscribe((res)=>{
      this.data =res.mes
    })
  }

  navigateurl(data){
    this.Routes.navigateByUrl(data)
   }
   edit(username){
    this.navigateurl('teacher/student/edit/'+username)
   }
} 
