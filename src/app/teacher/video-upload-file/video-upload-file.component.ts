import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { UploadThumnailService } from '../services/upload-thumnail.service';
import { UploadVideoService } from '../services/upload-video.service';
import { VerifiyPassService } from '../services/verifiy-pass.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
      <p> </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark"  (click)="check()">Close</button>
    </div>
  `
})
export class NgbdModalContent {

  check(){
this.Routes.navigateByUrl('teacher/notes')
  }
  constructor(public activeModal: NgbActiveModal ,private Routes : Router ) {}

}


interface Alert {
  type: string;
  message: string;
}
const chaptername: Alert[] = [ {
  type: 'danger',
  message: 'Chapter Name is Required',
}
];

@Component({
  selector: 'app-video-upload-file',
  templateUrl: './video-upload-file.component.html',
  styleUrls: ['./video-upload-file.component.css'],
  standalone:false
})
export class VideoUploadFileComponent implements OnInit {
  alerts: Alert[];
per_upload
  close(alert: Alert) {
   
    
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset(message ,  type) {
    this.alerts = Array.from(chaptername);
this.alerts[0].message = message
this.alerts[0].type = type
    
  }
  vedouploded = false
 themouploded = false

  id1: string;
  alertsss : Alert[]= Array.from(chaptername);
  value:any
  video_not_up:boolean =  false
  constructor(private route: ActivatedRoute ,private service :UploadThumnailService  , private service2 :UploadVideoService, private service3 :VerifiyPassService, private modalService: NgbModal) { }





  ngOnInit(): void {


    var id1 = ''
    this.id1 = this.route.snapshot.params['id'];

this.service3.verify_data(this.id1).subscribe((res)=>{
  console.log(res);
  
  if(res){
    console.log(res.status);

    if(res.status ==true ){
      if(res.error == false){
this.video_not_up = true
      }else if(res.status ==true ){
    const modalRef = this.modalService.open(NgbdModalContent);

      }
    }
  }
})


    // const modalRef = this.modalService.open(NgbdModalContent);

  
  }
  
  selectedFile = null
  onFileselected(event){
this.selectedFile= event.target.files[0]




if(this.selectedFile.type =="image/jpeg"){
  document.getElementById('fie_thumanail').removeAttribute('style')

}else{
  document.getElementById('fie_thumanail').style.backgroundColor="red"
  document.getElementById('fie_thumanail').style.color="white"
  document.getElementById('fie_thumanail').style.padding='10px'

  this.reset('Please select a image only' , 'danger')  


}
}
  
  
onupload(){

  if(this.selectedFile){
if(this.selectedFile.type ==="image/jpeg"){

  // this.reset('Please select file to upload' , 'danger')


  this.service.upload_thumnail(this.selectedFile,this.id1 ).subscribe((res)=>{
if(res){
          
  if(res.body.status == true){

    if(res.body.error ==false){
      this.themouploded = true
    }
    if(res.body.error == true){

this.reset(res.body.mes , 'danger')

    alert()
    
      
    }
    
    
    }else{
      
    
    }
  
}

  });

}else{


  this.reset('Please select a image only' , 'danger')
}
}else{
  this.reset('Please select file to uploadb' , 'danger')



}
}





selectedFilevideo = null
onFileselectedvideo(event){
this.selectedFilevideo= event.target.files[0]



if(this.selectedFilevideo.type ==="video/mp4"){
document.getElementById('fie_video').removeAttribute('style')


}else{
document.getElementById('fie_video').style.backgroundColor="red"
document.getElementById('fie_video').style.color="white"
document.getElementById('fie_video').style.padding='10px'

this.reset('Please select a image only' , 'danger')
}
}


onuploadvideo(){
  if(this.selectedFilevideo){
    console.log();
    
if(this.selectedFilevideo.type ==="video/mp4"){


  if (confirm('Are you sure you want to upload the video ? It may take a some time depending upon your internet connection.It will use approximately '+   Math.round((this.selectedFilevideo.size/1024)/1024) +' mb of data')) {
  
    this.service2.upload_video(this.selectedFilevideo,this.id1 ).subscribe((res)=>{

      if(res){
        
        if(res.body.status == true){

          if(res.body.error ==false){
            this.vedouploded = true
          }
          if(res.body.error == true){

      this.reset(res.body.mes , 'danger')

          alert()
          
            
          }
          
          
          }else{
            
          
          }
        
      
      }
      });
  } else {
    // Do nothing!
  }


}else{
document.getElementById('fie_video').style.backgroundColor="red"
document.getElementById('fie_video').style.color="white"
document.getElementById('fie_video').style.padding='10px'

this.reset('Please select a video only' , 'danger')
}
}else{
this.reset('Please select a video to upload' , 'danger')

}
}


verifypass(){
  this.service3.check_data(this.id1 ).subscribe((res)=>{
    if(res.status == true && res.error == false){
  
      this.reset( res.mes,  'success') 
    }
    
   
  });
}


}
