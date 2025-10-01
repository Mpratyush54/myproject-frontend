import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { StogageService } from 'src/app/services/stogage.service';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.css'],
  standalone:false
})
export class IndexStudentComponent implements OnInit {

  constructor(private titleService:Title, private localsotage:StogageService) { }

  ngOnInit(): void {
 var   title = this.localsotage.student_get('student_username')
    this.titleService.setTitle(`Welcome, ${title}`);

  }

}
