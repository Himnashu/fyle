 import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import {map, startWith} from 'rxjs/operators';
const CACHE_KEY="httpbankCache";

@Injectable()
export class DataService {
banks ;
  constructor(private http : HttpClient) { 
  
  }
 
  public loaddata(){
    this.banks= this.http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI')
    .pipe(
      map(data => data)
    );
    this.banks
      .subscribe(
          ( response : Response ) => {
           localStorage[CACHE_KEY]=JSON.stringify(response);
          
         });
    this.banks=this.banks.pipe( 
         startWith(JSON.parse((localStorage[CACHE_KEY]) || '[]') )
         
    );
    return this.banks;
  }
}

 //  this.data.loaddata()
      // .subscribe( next=>{
      //   localStorage[CACHE_KEY]=next;
      //  }
      //  );
      //  this.banks=this.banks.subscribe( 
      //    startWith(localStorage[CACHE_KEY] || [])

      //  );