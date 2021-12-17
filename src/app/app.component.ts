import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './models/contact';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  isSubmitted = false;
  users: any;

  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(): void {
    this.httpService.getUsers()
      .subscribe((data) => {
        this.users = data;
      });
  }

  addRecord() {
    if (this.form.valid) {
      this.users.push(this.form.value);
    }
  }

  editRecord(user: Contact) {
    this.form.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      id: user.id     
    });
  }

  deleteRecord(index: number) {
    this.users.splice(index, 1);
  }
}
