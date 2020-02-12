import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName: string = 'Tom';
  lastName: string = 'Hank';
  gender: string = 'Male';
  age: number = 20;
}
