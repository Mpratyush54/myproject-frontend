import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-menu-sidebar',
  templateUrl: './student-menu-sidebar.component.html',
  styleUrls: ['./student-menu-sidebar.component.css']
})
export class StudentMenuSidebarComponent implements OnInit {

  constructor(private Routes:Router) { }

  ngOnInit(): void {
  }
  teacherroute(data){
    this.Routes.navigateByUrl(data)
}
}
