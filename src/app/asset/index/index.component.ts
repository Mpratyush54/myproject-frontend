import { Component, OnInit ,ViewChild , Input } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { NgbdCarouselPause } from './casual/casual.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone:true,
  imports:[
    NgbdCarouselPause
  ],
})
export class IndexComponents implements OnInit {
 

  constructor(private Routes:Router ) { 

  }

  ngOnInit(): void {

  }
  
  navigate(data){
    this.Routes.navigateByUrl(data)
  }
}
