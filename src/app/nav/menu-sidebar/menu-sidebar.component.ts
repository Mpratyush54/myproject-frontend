import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {

  constructor(private Routes:Router) { }

  ngOnInit(): void {
  }
  teacherroute(data){
    this.Routes.navigateByUrl(data)
}
}
