import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Contact } from '../../models/contact';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {
  users: any;

  constructor(private httpService: HttpService, private router: Router, public localStorage: LocalStorageService ) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData(): void {
    const users = this.localStorage.getLocal('users');
    if(users){
      this.users = JSON.parse(users || '');
    } else {
      this.httpService.getUsers()
      .subscribe((data) => {
        this.users = data;
        this.localStorage.setLocal('users', this.users);
      });
    }    
  }

  editRecord(user: Contact, index: number) {
    this.localStorage.setLocal('user', user);
    this.router.navigate(['/records/edit', index]);
  }

  deleteRecord(index: number) {
    this.users.splice(index, 1);
  }

}
