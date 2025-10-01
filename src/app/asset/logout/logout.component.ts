import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  standalone:false
})
export class LogoutComponent implements OnInit {

  constructor(private Routes: Router) { }

  ngOnInit(): void {
  }
navigate(data){
  this.Routes.navigateByUrl(data)
}
}
