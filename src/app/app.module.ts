import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from "@angular/material/icon";
import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { TestService } from './test.service';
import {RouterModule} from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavWithoutSearchComponent } from './nav-without-search/nav-without-search.component';
import { AddGuardComponent } from './add-guard/add-guard.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { UniqueGuardsComponent } from './unique-guards/unique-guards.component';
import { GuardLogsComponent } from './guard-logs/guard-logs.component';
import { UniqueEmployeesComponent } from './unique-employees/unique-employees.component';
import { EmployeeLogsComponent } from './employee-logs/employee-logs.component';
import { UniqueVisitorsComponent } from './unique-visitors/unique-visitors.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditGuardComponent } from './edit-guard/edit-guard.component'; 
import { DataService } from './data.service';
import { EditGuardByIdComponent } from './edit-guard-by-id/edit-guard-by-id.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AskNewPasswordComponent } from './ask-new-password/ask-new-password.component'; 
import { Routes } from '@angular/router';
import { VisitorSideNavComponent } from './visitor-side-nav/visitor-side-nav.component';
import { EmpSideNavComponent } from './emp-side-nav/emp-side-nav.component';
import { GuardSideNavComponent } from './guard-side-nav/guard-side-nav.component';

export class MyModule {}

const appRoutes: Routes = [
  { path: 'uniqueVisitors'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent,
    SideNavComponent,
    DisplayComponent,
    WelcomePageComponent,
    NavWithoutSearchComponent,
    AddGuardComponent,
    UniqueGuardsComponent,
    GuardLogsComponent,
    UniqueEmployeesComponent,
    EmployeeLogsComponent,
    UniqueVisitorsComponent,
    VisitorLogComponent,
    AddEmployeeComponent,
    EditGuardComponent,
    EditGuardByIdComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    AskNewPasswordComponent,
    VisitorSideNavComponent,
    EmpSideNavComponent,
    GuardSideNavComponent 
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    RouterModule.forRoot([
      {
        path:'',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path:'welcomePage',
        component: WelcomePageComponent
      },
      {
        path: 'addGuard',
        component: AddGuardComponent
      },
      {
        path: 'displayGuards',
        component: UniqueGuardsComponent
      },
      {
        path: 'guardLogs',
        component: GuardLogsComponent
      }, 
      {
        path: 'editGuard',
        component: EditGuardComponent
      },
      {
        path: 'displayEmployee',
        component: UniqueEmployeesComponent
      },
      {
        path: 'employeeLog',
        component: EmployeeLogsComponent
      },
      {
        path: 'displayVisitors',
        component: UniqueVisitorsComponent
      },
      {
        path: 'visitorsLog',
        component: VisitorLogComponent
      },
      {
        path: 'addEmployee',
        component: AddEmployeeComponent
      },
      {
        path: 'editGuardById',
        component: EditGuardByIdComponent
      },
      {
        path: 'resetPassword',
        component: ResetPasswordComponent
      },
      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
      },
      {
        path: 'askNewPassword',
        component: AskNewPasswordComponent
      }  
    ]) 
  ],
  providers: [TestService,DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
