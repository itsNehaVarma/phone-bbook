import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {
  users: any;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData(): void {
    this.httpService.getUsers()
      .subscribe((data) => {
        this.users = data;
      });
  }

  editRecord(user: Contact, index: number) {
    this.router.navigate(['/records/edit'], { queryParams:  {id: index+1}});
    // this.form.patchValue({
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   phone: user.phone,
    //   id: user.id     
    // });
  }

  deleteRecord(index: number) {
    this.users.splice(index, 1);
  }

}
