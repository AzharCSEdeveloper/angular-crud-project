import { Injectable } from "@angular/core";
import { Employee } from '../models/employee.model'


export class EmployeeService{
private listEmployees : Employee[]  = [
    {
      id :1,
      name:'Azhar',
      gender:'male',
      contactPreference:'Email',
      phoneNumber:97854,
      dateOfBirth:new Date('2/25/1976'),
      department:'IT',
      isActive:true,
      photopath:'assets/images/97772.gif'

    },
    {
      id:2,
      name:'Bhupendra',
      gender:'male',
      contactPreference:'phone',
      phoneNumber:97854,
      dateOfBirth: new Date('2/23/1934'),
      department:'CSE',
      isActive:true,
      photopath:'assets/images/499788.jpg'

    },
    {
      id:3,
      name:'kamaljeet singh',
      gender:'male',
      contactPreference:'phone',
      phoneNumber:97854,
      dateOfBirth:new Date('2/25/1994'),
      department:'IT',
      isActive:false,
      photopath:'assets/images/85329.jpg'
    },
    
  ];
  getEmployee():Employee[]{
      return this.listEmployees;
  }
  save(employee:Employee){
      this.listEmployees.push(employee);
  }
}