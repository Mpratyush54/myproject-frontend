import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notificationdetails',
  templateUrl: './notificationdetails.component.html',
  styleUrls: ['./notificationdetails.component.css'],
  standalone:false
})
export class NotificationdetailsComponent implements OnInit {

  constructor(private Routes : Router , private service:NotificationService ,private route: ActivatedRoute) { }
  model;
  id1;

  ngOnInit(): void {
    this.id1 = this.route.snapshot.params['id'];

    this.service.notification_see(this.route.snapshot.params['id']).subscribe((res)=>{
if(res)      {
  if(res.mes){
      this.model = res.mes
     
   
   this.knowclass(res.mes)

}}
      })
  
  }

  navigateurl(data){
    this.Routes.navigateByUrl(data)
   }
   knowclass(res){
     
    for (let i = 0; i < res.length; i++) {

      this.service.know_class(res[i].username).subscribe((response)=>{

    document.getElementById(res[i].username).innerHTML =response.mes[0].class
         
       })
     }
    

   }
}
