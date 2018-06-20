import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Department } from '../models/department.model';
import { Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  employee:Employee = {
    id:null,
    name:null,
    gender:null,
    contactPreference:null,
    phoneNumber:null,
    email:'',
    dateOfBirth:null,
    department:'select',
    isActive:null,
    photopath:null,
  };
  departments : Department[]= [
    {id:1,name:'computer science egnineering'},
    {id:2,name:'it'},
    {id:3,name:'me'},
    {id:4,name:'ec'}
  ];

  constructor(private _employeeService:EmployeeService,
              private _router:Router) { }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  saveEmployee(): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }

}
