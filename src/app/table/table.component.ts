import { Component} from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string [] = ['id', 'birthDate', 'firstName', 'lastName', 'gender', 'hireDate'];

  constructor(private restClient: EmployeeService)
  {
    this.loadData();
  }

  data: any;
  loadData():void
  {
    this.restClient.getDataRows("http://localhost:8080/employees").subscribe
    (
      web_data => this.data = web_data._embedded.employees
    )
  }
}
export interface Employee{
  id:number;
  birthdate:string;
  firstName:string;
  lastName:string;
  gender:string;
  hiredate:string;
}
export interface Answer{
  _embedded:Embedded;
  _links: Links;
  page:any;
}
export interface Links{
  self:Link;
  first:Link;
  prev:Link;
  next:Link;
  last:Link;
  profile:Link;
}
export interface Link {
  href: string;
}
export interface Embedded{
  employees:Employee[];
}


  