import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private Routes : Router , private service:NotificationService ) { }
  model;
  ngOnInit(): void {
    this.service.notification_custom().subscribe((res)=>{
   
      
this.model = res.mes
        })
  }
  navigateurl(data){
    this.Routes.navigateByUrl(data)
   }
   navigateurls(data){
     
    this.Routes.navigateByUrl(`/teacher/notification/${data}`)
   }
}
