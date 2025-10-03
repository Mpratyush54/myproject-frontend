import { ApplicationRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { StogageService } from 'src/app/services/stogage.service';
import { NotesService } from '../services/notes.service';
import { AppModule } from "src/app/app.module";
import { HeaderDesktopComponent } from 'src/app/nav/header-desktop/header-desktop.component';
import { CommonModule } from '@angular/common';
import { MenuSidebarComponent } from "src/app/nav/menu-sidebar/menu-sidebar.component";
import { HeaderMobileComponent } from "src/app/nav/header-mobile/header-mobile.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
 
  standalone:true,
   imports: [
    CommonModule, // modules it uses
    HeaderDesktopComponent,
    MenuSidebarComponent,
    HeaderMobileComponent
],
})
export class IndexComponent implements OnInit {
  
name= this.localstoragee.teacher_get('teacher_name')

  constructor(private localstoragee :StogageService , private service:NotesService ) { 
      
   }
  ngOnInit(): void {
    // console.log(name);

this.service.check().subscribe((res)=>{
// console.log(res);

})


  }



}
