import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p> {{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="check()" >Close</button>
    </div>
  `,
  standalone:false
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal ,private Routes: Router) {}
  check(){
    if(this.name === 'Your Notes were added sucessfully'){


    }else{

      
    }
    this.activeModal.close('Close click')

  }
}

@Component({
  selector: 'app-new-notification',
  templateUrl: './new-notification.component.html',
  styleUrls: ['./new-notification.component.css'],
  standalone:false
})
export class NewNotificationComponent implements OnInit {

  constructor(private service:NotificationService ,private modalService: NgbModal,private Routes:Router ) { }

  ngOnInit(): void {
 
  }
  Manually = false
  file_image_cancel = false
  file_image = false
  class = [
    {eritten:'Class 1' ,value: 1},
    {eritten:'Class 2' ,value: 2},
    {eritten:'Class 3' ,value: 3},
    {eritten:'Class 4' ,value: 4},
    {eritten:'Class 5' ,value: 5},
    {eritten:'Class 6' ,value: 6},
    {eritten:'Class 7' ,value: 7},
    {eritten:'Class 8' ,value: 8},
    {eritten:'Class 9' ,value: 9},
    {eritten:'Class 10',value: 10}]
    subject = [
      {eritten:'Math' ,value: 'Math'},
      {eritten:'English' ,value: 'English'},
      {eritten:'Science' ,value: 'Science'},
      {eritten:'Gs' ,value: 'Gs'},
      {eritten:'Gk' ,value: 'Gk'},
      {eritten:'Pd' ,value: 'Pd'},
      {eritten:'Hindi' ,value: 'Hindi'},
      {eritten:'Computer' ,value: 'Computer'}]
   
  onSubmit(data){


this.service.notification_send(data).subscribe((res)=>{
if(res){
  
  if(res.status){
    if(res.status == true){


  

        if(res.error ==  false){

          if(res.mes){
            this.Routes.navigateByUrl('/teacher/notification')

            const modalRef = this.modalService.open(NgbdModalContent);
            modalRef.componentInstance.name = `The Notifcations were sent sucessfully and the Id was ${res.mes}`;
         }
        }
      
    }
  }
}
})
  }   
}
