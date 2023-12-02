import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { StogageService } from './stogage.service';



@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {
  // verify_data
  constructor(private http: HttpClient, private Routes: Router, private localsorage: StogageService) { }
  mail(mail) {
    let url = environment.baseurl + 'forgot-password';
    return this.http.post(url, {
      email: mail,
    }).pipe(
      map((data: any) => {
        console.log(data);
        console.log(data.error);

        if (data.error == true) {
          document.getElementById('hidden').removeAttribute('style')
          document.getElementById('hidden').innerHTML = 'Invalid Details'
          document.getElementById('hidden_message').innerHTML = 'Invalid Details'
        }
        if (data.error == false) {
          document.getElementById('hidden').removeAttribute('style')
          document.getElementById('hidden').innerHTML = 'An Email has been sent to your mail'
          document.getElementById('hidden_message').innerHTML = 'An Email has been sent to your mail'
        }
      }), catchError(response => {
        console.log(response);
        //     document.getElementById('hidden').removeAttribute('style')
        //     document.getElementById('hidden_message').innerHTML ='Something went wrong!'
        return throwError('Something went wrong!');
      })
    )
  }

  details_verification(hash, username) {
    let url = environment.baseurl + 'forgot-password/verify_data';
    return this.http.post(url, {
      username: username,
      hash: hash,
    }).pipe(
      map((data: any) => {
        console.log(data);

        return data

      }), catchError(response => {
        console.log(response);
        //     document.getElementById('hidden').removeAttribute('style')
        //     document.getElementById('hidden_message').innerHTML ='Something went wrong!'
        return throwError('Something went wrong!');
      })
    )
  }

  details_fill(hash, username, password) {
    let url = environment.baseurl + 'forgot-password/verify_fill';
    return this.http.post(url, {
      username: username,
      hash: hash,
      password: password,
    }).pipe(
      map((data: any) => {
        console.log(data);

        return data

      }), catchError(response => {
        console.log(response);
        //     document.getElementById('hidden').removeAttribute('style')
        //     document.getElementById('hidden_message').innerHTML ='Something went wrong!'
        return throwError('Something went wrong!');
      })
    )
  }
}


