import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataService } from './service/data.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  constructor(private http: HttpClient , private data : DataService,private _router : Router) {}
  
  ngOnInit(): void {
   

   
       
  }

  
 
}
