import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
bank :any =[];
  
   constructor(private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
          this.bank = params;
          console.log(this.bank);
          
      });
    // this.x=this.route.snapshot.paramMap.get('queryParams');
    // console.log(this.x);
  }
  ngOnInit() {
  }

}
