import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-setings',
  templateUrl: './setings.component.html',
  styleUrls: ['./setings.component.css'],
  standalone:false
})
export class SetingsComponent implements OnInit {
  textmodel:any

  constructor(private service:SettingsService) { }

  ngOnInit(): void {
    this.service.divices().subscribe((res)=>{
      if(res.status == true){
        if(res.error == false){
          this.textmodel = res.data
          console.log(res.data);
          
        }
      }
 
    })
  }
 
}
