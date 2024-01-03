import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient ,HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import  'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { stringify } from '@angular/compiler/src/util';
import { StogageService } from 'src/app/services/stogage.service';
import { DeviceDetectorService ,DeviceInfo} from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient ,private Routes:Router ,private localstorage :StogageService,private DeviceDetectorService:DeviceDetectorService ){ }
 private readonly  usernames = this.localstorage.teacher_get('teacher_username')
 private readonly  emails = this.localstorage.teacher_get('teacher_email')
 private readonly  query_tokens = this.localstorage.teacher_get('teacher_query_token')

know_class(username){



      let url = environment.baseurl+`teacher/notification/know_class`;

      return this.http.post(url ,{
        username:this.usernames,
        email:this.emails ,
        query_token: this.query_tokens,
        data:username
        }).pipe(
          map((data: any) => {

      if(data.status == true)   {
        if(data.error == false){
return data
        }
      }

          }), catchError( response => {

            return response


          }))

}
notification_see(data){



      let url = environment.baseurl+`teacher/notification/check-notifaction-custom2`;

      return this.http.post(url ,{
        username:this.usernames,
        email:this.emails ,
        query_token: this.query_tokens,
        data:data
        }).pipe(
          map((data: any) => {

      if(data.status == true)   {
        if(data.error == false){
return data
        }
      }

          }), catchError( response => {

            return response


          }))

}
notification(datas:any){

  const useragent = window.navigator.userAgent;


  console.log(this.usernames);
  console.log(this.emails);
  console.log(this.query_tokens);

      let url = environment.baseurl+`teacher/notification/data`;

      return this.http.post(url ,{
        username:this.usernames,
        email:this.emails ,
        query_token: this.query_tokens,
        data: datas,
        useragent:this.DeviceDetectorService.getDeviceInfo()

        }).pipe(
          map((data: any) => {

      if(data.status == true)   {
        if(data.error == false){
        console.log('sucss');

        }
      }

          }), catchError( response => {

            return response


          }))

}
  notificationno(){





    let url = environment.baseurl+`teacher/notification/check-notifaction-all`;

    return this.http.post(url ,{
      username:this.usernames,
      email:this.emails ,
      query_token: this.query_tokens

      }).pipe(
        map((data: any) => {

    if(data.status == true)   {
      if(data.error == false){
    localStorage.setItem('lastroutetime' , data.time)

        if(data.notify){

          var count = Object.keys(data.notify).length;
    return count

        }
      }
    }

        }), catchError( response => {

          return response


        }))

  }
  notificationall(){



        let url = environment.baseurl+`teacher/notification/check-notifaction-all`;

        return this.http.post(url ,{
          username:this.usernames,
          email:this.emails ,
          query_token: this.query_tokens

          }).pipe(
            map((data: any) => {

        if(data.status == true)   {
          if(data.error == false){

            if(data.notify){

        return data.notify

            }
          }
        }

            }), catchError( response => {

              return response


            }))

      }
      onclick(id){



            let url = environment.baseurl+`teacher/notification/seen`;

            return this.http.post(url ,{
      username:this.usernames,
          email:this.emails ,
          query_token: this.query_tokens,
              id: id

              }).pipe(
                map((data: any) => {


            if(data.status == true)   {
              if(data.error == false){

              }
            }

                }), catchError( response => {

                  return response


                }))

          }
          notification_send(data){



                let url = environment.baseurl+`teacher/notification/new`;

                return this.http.post(url ,{
          username:this.usernames,
              email:this.emails ,
              query_token: this.query_tokens,
data:data
                  }).pipe(
                    map((data: any) => {


                if(data.status == true)   {
                  if(data.error == false){
               return data
                  }
                }

                    }), catchError( response => {

                      return response


                    }))

          }
          notification_custom(){



                let url = environment.baseurl+`teacher/notification/check-notifaction-custom`;

                return this.http.post(url ,{
          username:this.usernames,
              email:this.emails ,
              query_token: this.query_tokens,
                  }).pipe(
                    map((data: any) => {


                if(data.status == true)   {
                  if(data.error == false){
               return data
                  }
                }

                    }), catchError( response => {

                      return response


                    }))

          }
private checkpermission(){
  Notification.requestPermission().then()

}
 routes(url){
  this.Routes.navigateByUrl(url)

}
}
