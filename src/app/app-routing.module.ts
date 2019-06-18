import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { BanklistComponent } from './banklist/banklist.component';


const appRoutes: Routes = [
  { path: '', component: BanklistComponent },
    { path: 'bank', component: BankComponent },

 
];
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
