import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { AllRecordsComponent } from './components/all-records/all-records.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// const routes: Routes = [
//   { path: 'add-record', component: AddRecordComponent },
//   { path: '',   redirectTo: '/app-component', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];

const routes: Routes = [
  {path: '', redirectTo: 'all-records', pathMatch: 'full'},
  {path: 'all-records', component: AllRecordsComponent},
  {path: 'records/add', component: AddRecordComponent},
  {path: 'records/edit/:id', component: AddRecordComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
