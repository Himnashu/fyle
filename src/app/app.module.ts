import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './service/data.service';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { SpinerComponent } from './spiner/spiner.component';
import { BankComponent } from './bank/bank.component';
import { BanklistComponent } from './banklist/banklist.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    SpinerComponent,
    BankComponent,
    BanklistComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HttpModule,
    DataTablesModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
