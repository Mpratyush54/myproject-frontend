import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somethingwentwrong',
  templateUrl: './somethingwentwrong.component.html',
  styleUrls: ['./somethingwentwrong.component.css'],
  standalone:false
})
export class SomethingwentwrongComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Notification.requestPermission()
  }
hello(){
  console.log(1);
  
  Notification.requestPermission()

}
}
