import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { RolesService } from '../../services/user-management/role.service';
import { PermissionsService } from '../../services/user-management/permission/permission.service';
import { ModulesService } from '../../services/user-management/permission/modules.service';
import { InternalUsersService } from '../../services/user-management/internal-users.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  title = 'case management';
  errorMessage: any;
  isLoginFailed: any;
  isLoggedIn: boolean = false;
  email: any;
  token: any;
  roles: any;
  modules: any;
  permissions: any;
  details: any;
  userList: any;
  fullToken: any;

  myDate = new Date();
  myNewDate: any;

  constructor(private auth: LoginService,
    private rolesService: RolesService,
    private permissionService: PermissionsService,
    private moduleService: ModulesService,
    private userServ:InternalUsersService,
    private datePipe: DatePipe) { 
      this.myNewDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    }

  userToken: any;
  ngOnInit(): void {
    this.getUserRoles();
    this.functionsLoader();
    this.userDetails();
    this.showUsers();
  }

  userDetails(){
    this.details = localStorage.getItem('user');
    console.log('details',this.details);
    
     return this.details;
    }
    showUsers(): void{
      this.userServ.showUsers(this.details).subscribe(
        res  =>{
          this.userList = res.user;
          console.log('User details',this.userList);
            return this.userList;
        },
        err =>{
          console.log(err);
        }
      )

    }

 

  getUserRoles() {
    let roles: any = localStorage.getItem('roles');
    this.roles = JSON.parse(roles);
    let n = this.roles.length, role_number = 0;
    this.roles.forEach((role: any) => {
      role_number = role_number + 1;
      this.rolesService.showRoles(role.id).subscribe((role_permission: any) => {
        role.permissions = role_permission.role.permissions;
      });
    });
    if (n == role_number) {
      console.log('roles are :', this.roles);
      this.getSubmodules();
    }
  }

  getSubmodules() {
    this.permissionService.getPermissions().subscribe((permissions: any) => {
      this.permissions = permissions;
    });
    this.moduleService.getModules().subscribe((modules: any) => {

      this.modules = modules;
      let n = this.modules.modules.data.length, module_number = 0;
      this.modules.modules.data.forEach((module: any) => {
        module_number = module_number + 1;
        module.submodules.forEach((submodule: any) => {
          this.permissions.submodules.data.forEach((permissions_submodules: any) => {
            if (permissions_submodules.id == submodule.id) {
              submodule.permissions = permissions_submodules.permissions;


            }
          });
        });
      });
      if (n == module_number) {
        this.SubmodulePermission();
      }
    });
  }
  // intergrationVerification() {
  //   this.auth.loggedIn()
  //   this.token=this.auth;
  //   console.log('token are :',this.token);

  // }


  SubmodulePermission(){
    let n = this.modules.modules.data.length , module_number = 0 ;
    this.modules.modules.data.forEach((module:any) => {
      module_number = module_number +1 ;

      module.submodules.forEach((submodule:any )=> {
        if (submodule.permissions && submodule.permissions != []) {
          submodule.permissions.forEach((permission:any) => {
            this.roles.forEach((role:any) => {
              role.permissions.forEach((role_permission:any) => {
                if (role_permission.id == permission.id) {
                  submodule.hasPermission = true ;
                }

              });
            });
          });
        }
      });

    });
    if(n == module_number ){
     console.log('Modules',this.modules);

    }
  }

  functionsLoader() {
    this.isLoggedIn = !!this.auth.loggedin;
    if (this.isLoggedIn) {
      const user = this.auth.loggedIn()
      this.fullToken = this.auth.token
      console.log('email is ', this.email);
      console.log('token are :', this.fullToken);
      // this.all=true;
      // this.alphabetical=false;
      // this.getPrivateBookLists();
      // this.getPublicBookLists();

    }
    else {
      // this.all=true;
      // this.alphabetical=false;
      // this.getPublicBookLists();
    }
  }


}
