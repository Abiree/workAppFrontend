import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiPaths } from 'src/app/shared/enums/apiPath';
import { ListError } from 'src/app/shared/validators/listError';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  value:any;
  value2:any

  visible:any;

  //form
 authForm!: FormGroup;
 Error=ListError;
 hide = true;
 isLog=false;



 lable="Submit";
 isLoading=false;

 separateDialCode = false;

 msg={} as any;






  constructor( private fb: FormBuilder,
    private authservice: AuthService,
    public messageService:MessageService,
    private router:Router
    ){}

  ngOnInit(): void {

    this.authForm = this.fb.group({

      firstname: [
        '',
        [
          Validators.required,
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required
        ],
      ],
      password: [
        '',
        [
          Validators.required
        ],
      ],
    });
    
  }

  get f() {
    return this.authForm.controls;
  }

  register(){
    const apiurl=ApiPaths.HomePage; 
    const baseUrl =window.location.origin;
    let user={
      "clientURI":baseUrl+apiurl,
      "firstName": this.authForm.value.firstname,
      "lastName": this.authForm.value.lastname,
      "username":this.authForm.value.firstname+this.authForm.value.lastname,
      "password": this.authForm.value.password,
      "email": this.authForm.value.email,
      "phoneNumber":this.authForm.value.phone,
      "roles": []
    }


    this.authservice.postUser(user).subscribe(({
      next:(data:any)=>{
        this.msg={};
        this.visible=true;      
      },
      error:(error:any)=>{
        let err=error.error;
        err.Email!=null?this.msg!.emailMsg=err.Email:null
        err.FirstName!=null?this.msg!.firstnameMsg=err.FirstName:null
        err.LastName!=null?this.msg!.lastnameMsg=err.LastName:null
        err.PhoneNumber!=null?this.msg!.phoneMsg=err.PhoneNumber:null
      }
    }))
  }

  redirect(){
    this.router.navigate(["dashboard"])
  }
}
