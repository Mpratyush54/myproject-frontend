import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StogageService } from 'src/app/services/stogage.service';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceStudent {

  constructor(private http: HttpClient , private Routes: Router ,private localstorage :StogageService) { }

 usernames = this.localstorage.student_get('student_username')  
 emails =  this.localstorage.student_get('student_email') 
 query_tokens = this.localstorage.student_get('student_query_token')  
 student_class = this.localstorage.student_get('student_class')  

 
  index(){
  
    let url = environment.baseurl+'student/notes';
// console.log(url);

     return this.http.post(url ,{
      student_username:this.usernames,
      student_email:this.emails ,
      student_query_token: this.query_tokens,
      class: this.student_class

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
  index_idividual(id){
  
    let url = environment.baseurl+'student/notes/idividual';

     return this.http.post(url ,{
      student_username:this.usernames,
      student_email:this.emails ,
      student_query_token: this.query_tokens,
      class: this.student_class,
      id: id
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
}
