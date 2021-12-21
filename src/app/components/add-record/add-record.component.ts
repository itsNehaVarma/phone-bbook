import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  users: any;
  edit = false;
  id: any | null;

  constructor(private fb: FormBuilder,
    public localStorage: LocalStorageService,
    private router: Router,
    private route: ActivatedRoute) {
      this.form = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', Validators.required],
        id: ['', Validators.required]
      });
  }

  ngOnInit() {
    const users = this.localStorage.getLocal('users');
    this.users = JSON.parse(users || '');
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('this.id', this.id)
    if(this.id){
      this.edit = true;
      this.patchValues(this.id);
    }
  }

  addRecord() {
    if (this.form.valid) {
      if (this.edit) {
        console.log('this.form.value', this.form.value)
        this.users[this.id] = this.form.value;
      } else {
        this.users.push(this.form.value);
      }
      setTimeout(() => {
        this.localStorage.setLocal('users', this.users);
        this.router.navigate(['/all-records']);
      }, 1000)
    }
  }

  patchValues(index: any) {
    const user = JSON.parse(this.localStorage.getLocal('user') || '');
    this.edit = true;
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
