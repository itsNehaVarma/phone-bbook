import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let httpService: HttpService;
  let fb: FormBuilder;

  const users = [
    {
      "firstName": "Amit",
      "lastName": "Roy",
      "phone": "9876543210",
      "id": 1
    },
    {
      "firstName": "Aakash",
      "lastName": "Choudhury",
      "phone": "9876584431",
      "id": 2
    }];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        HttpService, FormBuilder
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    fb = TestBed.inject(FormBuilder);   
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(app, 'getAllData').and.stub();
    app.ngOnInit();
    expect(app).toBeTruthy();
  });

  it('should call getAllData', () => {
    spyOn(httpService, 'getUsers').and.returnValue(of(users));
    app.getAllData();
    expect(app.users[0].firstName).toEqual("Amit");
    expect(app.users[0].lastName).toEqual("Roy");
    expect(app.users[0].phone).toEqual("9876543210");
    expect(app.users[0].id).toEqual(1);
  });

  it('should call addRecord', () => {
    app.users = users;
    app.form = fb.group({
      firstName: 'New',
      lastName: 'User',
      phone: '1234567890',
      id: 3
    });
    app.addRecord();
    expect(app.users[2].firstName).toEqual("New");
    expect(app.users[2].lastName).toEqual("User");
    expect(app.users[2].phone).toEqual("1234567890");
    expect(app.users[2].id).toEqual(3);
  });
  it('should call editRecord', () => {
    app.users = users;
    const updatedUser = {
      firstName: 'New1',
      lastName: 'User1',
      phone: '1234567888',
      id: 4
    }
    app.form = fb.group({
      firstName: 'New',
      lastName: 'User',
      phone: '1234567890',
      id: 3
    });
    app.editRecord(updatedUser, 1);
  });

  it('should call deleteRecord', () => {
    app.users = users;
    app.deleteRecord(2);
    expect(app.users.length).toEqual(2);
  });
});
