import { Component, OnInit ,ElementRef, Input, OnDestroy,ViewChild, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit  {
  constructor(private route: ActivatedRoute) { }

  video_url
  image_url
  data:any

ngOnInit(): void {

  this.video_url =environment.baseurl+'teacher/playvideo/'+this.route.snapshot.params['id'];
  this.image_url =environment.baseurl+'teacher/playvideo/poster/'+this.route.snapshot.params['id'];
  console.log(this.video_url);

 this.data =  {
    fluid: true,
    aspectRatio:'1920:1080',
    autoplay: true,
    poster: `${this.image_url}` ,
    id:this.route.snapshot.params['id'],
    sources: [{
    src:`${this.video_url}`,
    type: 'video/mp4' ,

  }]}
}
hello(){
  console.log(true);

}
}
