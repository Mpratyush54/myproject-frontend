import { Component, OnInit } from '@angular/core';
import{ FormControl ,FormGroup ,FormBuilder , Validators } from'@angular/forms';
import { UploadVideoService } from '../services/upload-video.service';



interface Alert {
  type: string;
  message: string;
}
const chaptername: Alert[] = [ {
  type: '',
  message: '',
}
];
@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css'],
  standalone:false
})

export class VideoUploadComponent  {

  alerts: Alert[];

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset(message) {
    this.alerts = Array.from(chaptername);
this.alerts[0].message = message
    
  }



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
  // videoupload = new
 
  constructor(private service :UploadVideoService ) { }

  onSubmit(datas){
 
    event.preventDefault();


  //  if(datas.Chapter_Name == ''){
  //   console.log('Chapter_Name');
     
  //   this.reset('Chapter Name is Required')
  //   if(datas.Title == ''){
  //   console.log('Title');

  //     this.reset('Title is Required')
  //     if(datas.Chapter_No == ''){
  //       console.log('Chapter_No');

  //     this.reset('Chapter No is Required')

  //  if(datas.class == ''){
  //   this.reset('Class is Required')

  //   console.log('class');

  //  }else{


    this.service.uploadsssss_video(datas.Chapter_Name, datas.Title ,datas.Chapter_No, datas.class  ).subscribe((res)=>{
     console.log(res);
     
    });
     

    
  //  }}}}
    
   

  }
  // ngOnInit(): void {


  // }


}
