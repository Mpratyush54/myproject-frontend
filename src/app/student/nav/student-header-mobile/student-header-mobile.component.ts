import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  * as $  from 'jquery';

@Component({
  selector: 'app-student-header-mobile',
  templateUrl: './student-header-mobile.component.html',
  styleUrls: ['./student-header-mobile.component.css']
})
export class StudentHeaderMobileComponent implements OnInit {

  constructor(private Routes:Router) { }

  ngOnInit(): void {
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
console.log(this.setting)
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
                            $('.navbar-mobile').slideToggle('500');

                }
                else{
                    this.mobilenavs = false
                    $('.navbar-mobile').slideToggle('500');

                }
        
        }

 
  teacherroute(data){
    this.Routes.navigateByUrl(data)
}
}
