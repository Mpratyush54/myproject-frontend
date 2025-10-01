import { ApplicationRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { StogageService } from 'src/app/services/stogage.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone:false
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
