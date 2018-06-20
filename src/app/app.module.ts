import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import { EmployeeService } from './employees/employee.service';



import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const appRoutes : Routes =[
{ path:'list' , component: ListEmployeesComponent },
{ path:'create' , component:CreateEmployeeComponent},
{ path :'', redirectTo:'/list' , pathMatch:'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   RouterModule.forRoot(appRoutes),
    
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
