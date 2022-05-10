import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleDirective } from './components/sidebar/toggle.directive';
import { HomeComponent } from './components/page/home/home.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CivilCasesComponent } from './components/page/cases/registry/civil_registry/civil.component';
import { CriminalComponent } from './components/page/cases/registry/criminal_registry/criminal.component';
import { CivilAdmissionComponent } from './components/page/cases/admission/civil_admission/civil.component';
import { CriminalAdmissionComponent } from './components/page/cases/admission/criminal-admission/criminal-admission.component';
import { ZonesComponent } from './components/page/locations/zones/zones.component';
import { RegionsComponent } from './components/page/locations/regions/regions.component';
import { DistrictsComponent } from './components/page/locations/districts/districts.component';
import { WardsComponent } from './components/page/locations/wards/wards.component';
import { VillageComponent } from './components/page/locations/village/village.component';
import { MunicipleComponent } from './components/page/locations/municiple/municiple.component';
import { RoleComponent } from './components/administrator/role/role.component';
import { PermissionComponent } from './components/administrator/permission/permission.component';
import { UserComponent } from './components/administrator/user/user.component';
import { OperationsComponent } from './components/system_module/operations/operations.component';
import { ModulesComponent } from './components/system_module/modules/modules.component';
import { SubmodulesComponent } from './components/system_module/submodules/submodules.component';
import { CourtComponent } from './components/court_data/court/court.component';
import { CourtLevelComponent } from './components/court_data/court-level/court-level.component';
import { CourtRoomComponent } from './components/court_data/court-room/court-room.component';
import { CourtSubmissionComponent } from './components/court_data/court-submission/court-submission.component';
import { CivilFilingComponent } from './components/page/cases/filing/civil-filing/civil-filing.component';
import { CriminalFilingComponent } from './components/page/cases/filing/criminal-filing/criminal-filing.component';
import { CriminalAssignmentComponent } from './components/page/cases/assignment/criminal-assignment/criminal-assignment.component';
import { CivilAssignmentComponent } from './components/page/cases/assignment/civil-assignment/civil-assignment.component';
import { CivilDecisionComponent } from './components/page/cases/decision/civil-decision/civil-decision.component';
import { CriminalDecisionComponent } from './components/page/cases/decision/criminal-decision/criminal-decision.component';
import { ForgotPasswordComponent } from './components/auth/forgot_password/forgot_password.component';
import { CivilAdmissionViewComponent } from './components/page/cases/admission/civil-admission-view/civil-admission-view.component';
import { CriminalViewAdmissionComponent } from './components/page/cases/admission/criminal-view-admission/criminal-view-admission.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToggleDirective,
    HomeComponent,
    CivilCasesComponent,
    LoginComponent,
    DashboardComponent,
    CriminalComponent,
    CivilAdmissionComponent,
    CriminalAdmissionComponent,
    ZonesComponent,
    RegionsComponent,
    DistrictsComponent,
    WardsComponent,
    VillageComponent,
    MunicipleComponent,
    RoleComponent,
    PermissionComponent,
    UserComponent,
    OperationsComponent,
    ModulesComponent,
    SubmodulesComponent,
    CourtComponent,
    CourtLevelComponent,
    CourtRoomComponent,
    CourtSubmissionComponent,
    CivilFilingComponent,
    CriminalFilingComponent,
    CriminalAssignmentComponent,
    CivilAssignmentComponent,
    CivilDecisionComponent,
    CriminalDecisionComponent,
    ForgotPasswordComponent,
    CivilAdmissionViewComponent,
    CriminalViewAdmissionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTooltipModule,
    MatRippleModule,
    FormsModule,
    HttpClientModule

  ],
  // providers: [{
  //   provide: LocationStrategy,
  //   useClass: HashLocationStrategy
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }



