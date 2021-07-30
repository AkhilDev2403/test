import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },

  {
    path:'registration', component: RegisterComponent
  },

  {
    path: 'dashboard' , component: DashboardComponent
  },
  {
    path: 'fundtransfer', component:FundTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
