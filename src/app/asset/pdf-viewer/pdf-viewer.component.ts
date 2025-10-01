import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import WebViewer from '@pdftron/webviewer'
import { environment } from 'src/environments/environment';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css'],
  standalone:false
})
export class PdfViewerComponent implements OnInit {
  @ViewChild('viewer') viewerRef:ElementRef; 
@Input() url =""
urrr
  constructor() { }
  ngOnInit(): void {
   window.onload = function() {
    document.getElementById('openFile').style.display    = 'none'
   } 
    let  urlss = environment.baseurl+'student/notes/pdf/'+this.url;
    console.log(urlss);
    
    this.urrr = urlss
  }




}
