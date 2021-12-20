import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllRecordsComponent } from './components/all-records/all-records.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AllRecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
