import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  btnOnOff = true;
  employeeForm!: FormGroup;
  public showHide = false;
  public header = false;
  public header1 = false;
  public allEmployee: any;
  employeeModelObj: EmployeeModel = new EmployeeModel();

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      salary: ['', Validators.required],
    });
    this.getAllEmployee();
  }

  openCloseModal() {
    this.header = false;
    this.header1 = false;
    this.showHide = !this.showHide;
  }

  editOpenCloseModal() {
    this.header = true;
    this.header1 = true;
    this.showHide = !this.showHide;
  }

  postEmployeeDetails() {
    this.employeeModelObj.id = this.employeeForm.value.name;
    this.employeeModelObj.title = this.employeeForm.value.surname;
    // this.employeeModelObj.email = this.employeeForm.value.email;
    // this.employeeModelObj.number = this.employeeForm.value.number;
    // this.employeeModelObj.salary = this.employeeForm.value.salary;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        this.employeeForm.reset();
        console.log(res);
        alert('Employee added successfully');
      },
      function (err) {
        alert('Something wrong');
      }
    );
  }

  getAllEmployee() {
    this.api.getEmployee().subscribe((res) => {
      console.log(res);
      this.allEmployee = res;
      // return res;
    });
  }
}
