import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StogageService } from '../services/stogage.service';
import { TypeService } from '../services/type.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class IntersepterService implements HttpInterceptor {

  constructor(private LoaderService:LoaderService , private service:TypeService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.LoaderService.Isloading.next(true)
console.log(req.clone.length);


    return next.handle(req).pipe(finalize(()=>{
    
      setTimeout(() => {
        this.LoaderService.Isloading.next(false)
      }, 100);
    }) , )
  }
}
