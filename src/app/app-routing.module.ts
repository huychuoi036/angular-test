import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/search/dashboard.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  { path: 'account/create', component: CreateAccountComponent },
  { path: 'account/edit/:_id', component: EditAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
