import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { startWith } from 'rxjs/operators';

import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../service/data.service';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-banklist',
  templateUrl: './banklist.component.html',
  styleUrls: ['./banklist.component.css']
})
export class BanklistComponent implements OnInit  {
  
  // @ViewChild('dataTable') table;
  @ViewChild(DataTableDirective)static : false
  datatableElement: DataTableDirective;
  dtInstance: any;


  cities = []; 
  selectedcity : string = "";
  dtOptions: any;
  showSpinner: boolean = true;
  banks ;
  dtTrigger: Subject<any> = new Subject();
  message : any=[];
  setval : any="" ;
  fav : any =[];
   dataa :any =[];
  constructor(private http: HttpClient , private data : DataService,private _router : Router) {
    

  }
  
  someClickHandler(info: any): void { 
    let navigationExtras: NavigationExtras = {
      queryParams: {
    
          "ifsc": "ifsc",
          "bankid": info[1],
          "branch": info[2],
          "address": info[3],
          "city": info[4],
          "district": info[5],
          "state": info[6],
          "bank_name": info[7],
          
      }
  };
  this._router.navigate(["bank"], navigationExtras);

    // this._router.navigate(['bank/',]);
  }
  ngOnInit(): void {

    this.cities=['MUMBAI', 'Delhi', 'Jaipur', 'Alwar', 'Bangalore'];
    this.fav=[ 'ABHY0065001', 'ABHY0065003' ,'ABHY0065004'];
    this.dtOptions = { 
      pagingType: 'full_numbers',
      pageLength: 5,
      order: false ,
      processing: false,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
        
          self.someClickHandler(data);
        });
        return row;
      }
    };
    this.data.loaddata().subscribe(data => {
      this.banks = data;
      this.dtTrigger.next();
      this.showSpinner = false;
    });
     
       
  }
  //  ngOnChanges() {
  //   if(this.selectedcity){
  //     console.log(this.selectedcity)
  //       //if(changes.selected.currentValue !=== changes.selected.previousValue){
  //         this.banks = this.banks.filter(x => {
  //           console.log(x.city, this.selectedcity)
  //           return x.city === this.selectedcity
            
  //         })
  //         console.log(this.banks)
  //       //}
  //   }
  // }

  setSelectedcity(city : string){
    this.selectedcity=city;
      this.banks=this.banks.filter(x => x.city==this.selectedcity);
      console.log(this.banks);
      //console.log(this.banks);
      this.dtTrigger.next();
      this.showSpinner = false;
  //  console.log(this.selectedcity);
  //   if(this.banks.length === 0  || this.selectedcity===''){
  //     return this.banks;
  //   }
  //   else{
  //    let resultarray = [];

  //   for(const item of this.banks){

  //     if(item.city==this.selectedcity){

  //      resultarray.push(item);
  //     }
  //   }
  //   console.log(resultarray);
  //   if(resultarray.length==0)
  //   {
  //     this.banks=resultarray;
  //   }else{
  //     this.banks=this.banks;
  //   }
  // }
}
  
  
  ngOnDestroy(): void {
  //this.dtTrigger.unsubscribe();
  }
 
}
