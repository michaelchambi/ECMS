import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/page/home/home.component';
import { CivilCasesComponent } from './components/page/cases/registry/civil_registry/civil.component';
import { CriminalComponent } from './components/page/cases/registry/criminal_registry/criminal.component';
import { CivilAdmissionComponent  } from './components/page/cases/admission/civil_admission/civil.component';
import { CriminalAdmissionComponent } from './components/page/cases/admission/criminal-admission/criminal-admission.component';
import { ZonesComponent } from './components/page/locations/zones/zones.component';
import { RegionsComponent } from './components/page/locations/regions/regions.component';
import { DistrictsComponent } from './components/page/locations/districts/districts.component';
import { MunicipleComponent } from './components/page/locations/municiple/municiple.component';
import { WardsComponent } from './components/page/locations/wards/wards.component';
import { VillageComponent } from './components/page/locations/village/village.component';
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



const routes: Routes = [
  { path  : '', redirectTo: 'login', pathMatch: 'full' },
  { path  : 'login', component: LoginComponent },
  { path  : 'forgot-password',component:ForgotPasswordComponent},
  { path  : 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path  : 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path  : 'civil', component: CivilCasesComponent,canActivate: [AuthGuard] },
  { path  : 'criminal', component: CriminalComponent,canActivate: [AuthGuard] },
  { path  : 'civil-admissions', component: CivilAdmissionComponent,canActivate: [AuthGuard] },
  { path  : 'criminal-admissions', component: CriminalAdmissionComponent,canActivate: [AuthGuard] },
  { path  : 'zone', component: ZonesComponent,canActivate: [AuthGuard] },
  { path  : 'region',component: RegionsComponent,canActivate: [AuthGuard] },
  { path  : 'district', component: DistrictsComponent, canActivate: [AuthGuard] },
  { path  : 'municiple', component: MunicipleComponent, canActivate: [AuthGuard] }, 
  { path  : 'ward', component:WardsComponent,canActivate: [AuthGuard] },
  { path  : 'village',component:VillageComponent,canActivate: [AuthGuard] },
  { path  : 'roles', component: RoleComponent,canActivate: [AuthGuard] },
  { path  : 'permissions',component: PermissionComponent,canActivate: [AuthGuard] },
  { path  : 'users',component: UserComponent,canActivate: [AuthGuard] },
  { path  : 'system-operations',component: OperationsComponent,canActivate: [AuthGuard] },
  { path  : 'system-modules',component: ModulesComponent,canActivate: [AuthGuard] },
  { path  : 'system-submodules',component: SubmodulesComponent,canActivate: [AuthGuard] },
  { path  : 'courts',component: CourtComponent,canActivate: [AuthGuard] },
  { path  : 'court-level',component:CourtLevelComponent,canActivate: [AuthGuard] },
  { path  : 'court-submission',component:CourtSubmissionComponent,canActivate: [AuthGuard] },
  { path  : 'court-room',component:CourtRoomComponent, canActivate: [AuthGuard] },
  { path  : 'civil-filing',component:CivilFilingComponent, canActivate: [AuthGuard] },
  { path  : 'criminal-filing',component:CriminalFilingComponent, canActivate: [AuthGuard] },
  { path  : 'civil-assignment',component:CivilAssignmentComponent, canActivate: [AuthGuard] },
  { path  : 'criminal-assignment',component:CriminalAssignmentComponent, canActivate: [AuthGuard] },
  { path  : 'civil-decision',component:CivilDecisionComponent,canActivate: [AuthGuard]},
  { path  : 'criminal-decision',component:CriminalDecisionComponent,canActivate: [AuthGuard]},
  { path  : 'civil-view-admission',component:CivilAdmissionViewComponent},
  { path : 'criminal-view-admissio',component:CriminalViewAdmissionComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
