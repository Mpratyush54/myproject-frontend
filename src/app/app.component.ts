import { Component } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';
  constructor(  public loaderservice:LoaderService  ) {}


}
