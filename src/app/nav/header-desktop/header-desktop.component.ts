import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  SwPush ,SwUpdate} from '@angular/service-worker';

import  * as $  from 'jquery';
import { LogoutService } from 'src/app/teacher/services/logout.service';
import { NotificationService } from 'src/app/teacher/services/notification.service';
import { StogageService } from 'src/app/services/stogage.service';
import {LoaderService} from '../../loader/loader.service'
@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.css'],
  providers: [LogoutService],
  standalone:false

})
export class HeaderDesktopComponent implements OnInit {

  constructor(private service :LogoutService , private Routes:Router , private notification:NotificationService ,private SwUpdate:SwUpdate ,    private swPush: SwPush,       private localstorage :StogageService ,public loaderservice:LoaderService  ) {


          }
notifiactionnumber:number
notifiactionall

name = this.localstorage.teacher_get('teacher_name')
email = this.localstorage.teacher_get('teacher_email')

private readonly publicKey = 'BL1k4svygg7piYjqcY8MH8XW7QAt5T9QU20hWn9wQgLgw6zgVpOOHYmGza1kknjWuc1S-rkkKKazzqGBXpEEWzU';

  ngOnInit(): void {
    this.notification.notificationno().subscribe((res:any)=>{
      if(  res  == undefined ){
          this.notifiactionnumber = 0
            }else{
              document.getElementById('notification').removeAttribute('style')

              this.notifiactionnumber = res

            }

  })
  this.notification.notificationall().subscribe((res:any)=>{


this.notifiactionall = res


          })
    if (!this.swPush.isEnabled) {
        console.log('Notification is not enabled');
        return;
      }
     var reg =localStorage.getItem('regestration')
if(reg == ''){
      this.swPush
        .requestSubscription({
          serverPublicKey: this.publicKey,
        })
        .then((sub) => {
          console.log(sub);

        localStorage.setItem('regestration' , 'true')
            this.notification.notification(sub).subscribe((res:any)=>{

            })
        })
        .catch((err) => console.log(err));



  }
}
  setting:boolean=false
  setting1:boolean=false
  setting2:boolean=false
  setting3:boolean=false
  mobilenavs:boolean=false
  showdropdown() {




if(this.setting == false){
this.setting1=false
this.setting2=false
this.setting3=false
this.setting = true
this.mobilenavs =false

}
else{
    this.setting = false
}
}

  showdropdown1() {




if(this.setting1 == false){
this.setting1=true
this.setting2=false
this.setting3=false
this.setting = false
this.mobilenavs =false

}
else{
    this.setting1 = false
}


}
showdropdown2() {




    if(this.setting2 == false){
    this.setting1= false
    this.setting2=true
    this.setting3=false
    this.setting = false
    this.mobilenavs =false

    }
    else{
        this.setting2 = false
    }

}
    showdropdown3() {




        if(this.setting3 == false){
        this.setting1= false
        this.setting2=false
        this.setting3=true
        this.setting = false
        this.mobilenavs =false

        }
        else{
            this.setting3 = false
        }

        }
        mobilenav(){


            if(this.mobilenavs == false){
                this.setting1= false
                this.setting2=false
                this.setting3=false
                this.setting = false
                this.mobilenavs = true
                            // $('.navbar-mobile').slideToggle('500');

                }
                else{
                    this.mobilenavs = false
                    // $('.navbar-mobile').slideToggle('500');

                }

        }
        logout(){
          if(event){
      event.preventDefault()
          }
let  outputss =  this.service.logout();




        }
        teacherroute(data){
            this.Routes.navigateByUrl(data)
        }
        teacherroute2(data , id){
            this.notification.onclick(id).subscribe((res:any)=>{



                            })

            window.open(data, '_blank');

        }
}
