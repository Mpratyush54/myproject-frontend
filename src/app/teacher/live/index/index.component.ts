import { Component, OnInit } from '@angular/core';
import { LiveService } from '../../services/live.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexLiveComponent implements OnInit {

  constructor(private service:LiveService) { }
  new_sterm:boolean 
  class = [
    {eritten:'Class 1' ,value: 1},
    {eritten:'Class 2' ,value: 2},
    {eritten:'Class 3' ,value: 3},
    {eritten:'Class 4' ,value: 4},
    {eritten:'Class 5' ,value: 5},
    {eritten:'Class 6' ,value: 6},
    {eritten:'Class 7' ,value: 7},
    {eritten:'Class 8' ,value: 8},
    {eritten:'Class 9' ,value: 9},
    {eritten:'Class 10',value: 10}]
    subject = [
      {eritten:'Math' ,value: 'Math'},
      {eritten:'English' ,value: 'English'},
      {eritten:'Science' ,value: 'Science'},
      {eritten:'Gs' ,value: 'Gs'},
      {eritten:'Gk' ,value: 'Gk'},
      {eritten:'Pd' ,value: 'Pd'},
      {eritten:'Hindi' ,value: 'Hindi'},
      {eritten:'Computer' ,value: 'Computer'}]
  ngOnInit(): void {
    this.new_sterm= false
  }
  create_stream(data){
    this.service.new_live(data.class, data.Title).subscribe((res)=>{
      console.log(res);
      
    })
console.log(data);

  }
  set_true(){
    
    if(this.new_sterm == false){

    this.new_sterm= true
  }else if(this.new_sterm == true){

    this.new_sterm = false
  }
  }
}
