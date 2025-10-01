import { Component, Input, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NotesService } from '../services/notes.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p> {{name}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="check()" >Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal ,private Routes: Router) {}
  check(){
    if(this.name === 'Your Notes were added sucessfully'){


      this.Routes.navigateByUrl('/teacher/notes')
    }else{

      
    }
    this.activeModal.close('Close click')

  }
}

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css'],
  standalone:false
})
export class NotesAddComponent implements OnInit {
  selectedFile = null

  onFileselected(event){

    this.selectedFile= event.target.files[0]


    
    
    
    if(this.selectedFile.type =="application/pdf"){
      // document.getElementById('fie_thumanail').removeAttribute('style')
    
    }else{
this.open('please select a pdf only')
    
    
    }
    } 

  public editor = ClassicEditor;
  constructor(private service: NotesService ,private modalService: NgbModal , private Routes : Router
  )  { }



  open(mes) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = mes;
  }

  openseucess(mes) {

    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = mes;
    this.Routes.navigateByUrl('/teacher/notes')

  }


  Manually:boolean
  pdf:boolean


 
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
    this.Manually = false
    this.pdf = false


  }
  

  onSubmit(data){
if(data.Chapter_Name && data.Chapter_No &&  data.Title && data.subject && data.class ){
  let manuall:Boolean = data.Manually
  if(data.text){
    const text = data.text
  if(text.length > 15){

    
this.service.videos_without_file(data).subscribe((res) =>{
  if(res){
  if(res.status == true){

    if(res.error == false){

  this.open('Your Notes were added sucessfully ')
  this.Routes.navigateByUrl('/teacher/notes')

    }  }
  }
})
  }else{

    
  // this.reset('danger','You Need to type 15 character atleast')
  this.open('You Need to type 15 character atleast')
  }
if(data.text){}
}else if(data.fileinput){
  if(this.selectedFile.type =="application/pdf"){
    // document.getElementById('fie_thumanail').removeAttribute('style')
    this.service.videos_with_file(data , this.selectedFile).subscribe((res) =>{

      if(res){
        // console.log(res);
        
        
      if(res.status == true){
  
    
        if(res.error == false){
      this.open('Your Notes were added sucessfully ')
    this.Routes.navigateByUrl('/teacher/notes')
        }  }
      }
    })
  }else{
this.open('please select a pdf only')
  
  
  }


  }else{
  this.open('Any field is empty')

  }

}else{

  this.open('Any field is empty')
  // this.reset('danger',)
}
    
    
  }

}
