import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { StogageService } from 'src/app/services/stogage.service';
@Injectable({
  providedIn: 'root'
})
export class StudentVideoService {
  model1: any;
  model2: any;
  constructor(private http: HttpClient , private Routes: Router, private localstorage :StogageService) { }
  usernames = this.localstorage.student_get('student_username')  
  emails =  this.localstorage.student_get('student_email') 
  query_tokens = this.localstorage.student_get('student_query_token')  

  sendmessage(video_id:Number , video_class:number){
    this.model1 = video_id
    this.model2 = video_class
    this.Routes.navigate(['/student/videofetch'])


    }
    playvideo(){

        let url = environment.baseurl+'student/videofetch';

       return this.http.post(url ,{
        student_username:this.usernames,
        student_email:this.emails ,
        student_query_token: this.query_tokens

        }).pipe(
          map((data: any) => {
    if(data.status == true){

      return data
    }

          }), catchError( response => {



          return throwError( 'Something went wrong!' );




          })
       )
    }
watch_video(time , id){

  let url = environment.baseurl+'student/videowatch';
  return this.http.post(url ,{
    student_username:this.usernames,
    student_email:this.emails ,
    student_query_token: this.query_tokens,
    time:time,
    id:id
    }).pipe(
      map((data: any) => {

if(data.status == true){

  return data
}

      }), catchError( response => {
console.log(response);



      return throwError( 'Something went wrong!' );




      })
   )
}
}

