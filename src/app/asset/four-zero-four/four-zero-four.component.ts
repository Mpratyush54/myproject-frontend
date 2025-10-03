import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-four-zero-four',
  templateUrl: './four-zero-four.component.html',
  styleUrls: ['./four-zero-four.component.css'],
  standalone:true
})
export class FourZeroFourComponent implements OnInit {

  constructor(private Routes: Router) { }

  ngOnInit(): void {
  }
  navigate(data){
    this.Routes.navigateByUrl(data)
  }
}
