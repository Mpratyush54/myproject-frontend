import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StogageService } from 'src/app/services/stogage.service';
import { io } from 'socket.io-client';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(private http: HttpClient, private Routes: Router, private localstorage: StogageService) {

  }
  private readonly usernames = this.localstorage.teacher_get('teacher_username')
  private readonly emails = this.localstorage.teacher_get('teacher_email')
  private readonly query_tokens = this.localstorage.teacher_get('teacher_query_token')

  new_live(Class, title) {




    let url = environment.baseurl + `teacher/live/live-setup/new`;
    return this.http.post(url, {
      username: this.usernames,
      email: this.emails,
      query_token: this.query_tokens,
      class: Class,
      title: title
    }).pipe(
      map((data: any) => {



        if (data.status == true) {

          if (data.error == false) {
            this.Routes.navigateByUrl(`teacher/live/${data.id}`)
          }

        }



      }), catchError(error => {
        console.log(error);
        if (error.message == `Http failure response for ${url}: 0 Unknown Error`) {
          return
        } else {
          return throwError(error.message || "Server Error")
        }
      }))
  }
  details(id) {




    let url = environment.baseurl + `teacher/live/live-setup/details`;
    return this.http.post(url, {
      username: this.usernames,
      email: this.emails,
      query_token: this.query_tokens,
      id: id,
    }).pipe(
      map((data: any) => {



        if (data.status == true) {


          return data


        }



      }), catchError(error => {
        console.log(error);
        if (error.message == `Http failure response for ${url}: 0 Unknown Error`) {
          return
        } else {
          return throwError(error.message || "Server Error")
        }
      }))
  }





  // this is cchat paart of thing
  private socket = io(environment.soket_url)

  joinroom(room) {
    var data = { user: this.usernames, room: room }
    this.socket.emit('join', data)
  }
  revoverchat(room) {
    var data = { user: this.usernames, room: room }
    this.socket.emit('chat-details', data)
  }
  banuser(user_id, messge , room ,id) {


    var data = { banuser: user_id, message:messge ,room: room , socket_id:id}
    this.socket.emit('banneds', data)
  }
  newuserjoined() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('New User Joined', (data) => {
        observer.next(data)
      })
      return () => { this.socket.disconnect(); }
    })
    return observable;
  }
  banusercall() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('banned', (data) => {
        observer.next(data)
      })
      return () => { this.socket.disconnect(); }
    })
    return observable;
  }
  sendmesg(room, msg) {
    var data = { user: this.usernames, room: room, message: msg }
    this.socket.emit('Message', data)
  }

  newmsg(room) {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('new message', (data) => {
        let url = environment.baseurl + `teacher/chat/save-chat`;
        var user = data.user
        var msg = data.message
        this.http.post(url, {
          username: this.usernames,
          email: this.emails,
          query_token: this.query_tokens,
          room: room,
          user: user,
          message: msg,
        })

        observer.next(data)
      })
      return () => { this.socket.disconnect(); }
    })




    return observable;
  }
  priviousmsg() {
    let observable = new Observable<{ user: String, message: String }>(observer => {
      this.socket.on('preveious chat', (data) => {

        observer.next(data)
      })
      return () => { this.socket.disconnect(); }
    })



    return observable;
  }

  bancheck(room){
    let url = environment.baseurl + `bancheck`;
    return this.http.post(url, {
      username: this.usernames,
      email: this.emails,
      query_token: this.query_tokens,
      room:room
    }).pipe(
      map((data: any) => {

console.log(data);


        if (data.status == true) {
return data
         


        }



      }), catchError(error => {
        console.log(error);
        if (error.message == `Http failure response for ${url}: 0 Unknown Error`) {
          return
        } else {
          return throwError(error.message || "Server Error")
        }
      }))
  }
}
