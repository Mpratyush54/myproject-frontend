import { Injectable } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StogageService } from './stogage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient ,  private Routes: Router, private localsorage :StogageService) { }
  verifyusernamepass(statuss:string , change:string){


    let url = environment.baseurl+'login';

  return this.http.post(url ,{
    name:statuss,
    password:change}).pipe(
             map((data: any) => {


              if(data.status == true){

                if(data.fields == 0){
                 document.getElementById('error').removeAttribute('style')
                 document.getElementById('error').innerHTML =data.premsg
                 document.getElementById('error1').removeAttribute('style')
                 document.getElementById('error1').innerHTML =data.premsg
                }
                if(data.fields == 1){
                 document.getElementById('error1').removeAttribute('style')
                 document.getElementById('error1').innerHTML =data.premsg
                 document.getElementById('error').style.display = "none"

                }  if(data.fields == 2){
                 document.getElementById('error').removeAttribute('style')
                 document.getElementById('error').innerHTML =data.premsg
                 document.getElementById('error1').style.display = "none"

                }

                      }
  if(data.error == false){
              if(data.status == true){

             if(data.login == true){
  if(data.role == 2){
    this.localsorage.teacher_insert(data['username'] ,data['email'] ,data['name'] ,data['query_token'] ,data['class'] , data['query_token2'])


              //  localStorage.setItem('username',data['username'] );
              //  localStorage.setItem('email',data['email'] );
              //  localStorage.setItem('name',data['name'] );
              //  localStorage.setItem('query_token',data['query_token'] );
              //  console.clear()


                 this.Routes.navigate(['teacher'])
               return

  }
  if(data.role == 1){

    this.localsorage.Student_insert(data['username'] ,data['email'] ,data['name'] ,data['query_token'] ,data['class'] ,data['query_token2'])
    // localStorage.setItem('student_email',);
    // localStorage.setItem('student_name', );
    // localStorage.setItem('student_query_token', );
    // localStorage.setItem('student_class', );
   //  console.clear()


      this.Routes.navigate(['student'])
    return

}
  return
             }else{
              document.getElementById('hidden').removeAttribute('style')
              document.getElementById('hidden_message').innerHTML ='Invaild details'
              return throwError( 'Invaild details' );
             }

                 }else{






                   document.getElementById('hidden').removeAttribute('style')
                   document.getElementById('hidden_message').innerHTML ='Invaild details'
                   return throwError( 'Invaild details' );

                 }
                }else{
                  if(data.mes =="Banned by school/teacher"){
                    document.getElementById('hidden').removeAttribute('style')
                    document.getElementById('hidden_message').innerHTML =data.mes
                 return throwError( data.mes );
                  }else if(data.mes == 'Invalid Details'){
                    document.getElementById('hidden').removeAttribute('style')
                    document.getElementById('hidden_message').innerHTML =data.mes
                  }

                  else{
                    document.getElementById('hidden').removeAttribute('style')
                    document.getElementById('hidden_message').innerHTML ='Something went wrong!'
                 return throwError( 'Something went wrong!' );
                  }

                }
             }), catchError( response => {


                document.getElementById('hidden').removeAttribute('style')
                document.getElementById('hidden_message').innerHTML ='Something went wrong!'
             return throwError( 'Something went wrong!' );




             })
          )



  }

}

