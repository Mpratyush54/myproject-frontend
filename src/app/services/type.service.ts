import { Injectable } from '@angular/core';
import { StogageService } from '../services/stogage.service';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private service :StogageService) { }
  verify(){
    const  student =this.service.student_get('student_query_token2')
    const  teacher =this.service.teacher_get('teacher_query_token2')
  

   
    

    if(student != ''){
      
    var   headers = student

    }
     if(teacher != ''){

      headers =teacher

    }
    
    return headers
  }
}
