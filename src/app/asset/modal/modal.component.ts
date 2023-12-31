
import { Component, Input,  } from '@angular/core';


import { NgbActiveModal,  } from '@ng-bootstrap/ng-bootstrap';
import { Type } from '@angular/core';
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
  
    this.activeModal.close('Close click')

  }
}