import { Component, OnInit } from '@angular/core';
import { NotesServiceStudent } from '../../service/notes.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notesindvidual',
  templateUrl: './notesindvidual.component.html',
  styleUrls: ['./notesindvidual.component.css']
})
export class NotesindvidualComponent implements OnInit {
data
pdf
note = true

  constructor(private service :NotesServiceStudent , private route:ActivatedRoute, private titleService:Title,) { }

  ngOnInit(): void {

   this.service.index_idividual(this.route.snapshot.params['id']).subscribe((res)=>{
if(res.datas){


    //  console.log(res);
     
    this.data = res.datas
    this.titleService.setTitle(`${res.datas[0].title}`);
    if(res.datas[0].notes){
this.note = true
    window.onload = function () { 

    }
  }else if(res.datas[0].url){
this.note= false
// console.log('GHGG');

  }  

   }else if(res.pdf){
    this.pdf = res.pdf
    // console.log(res.pdf);
    this.titleService.setTitle(`${res.pdf[0].title}`);
   }
})
  }


}
