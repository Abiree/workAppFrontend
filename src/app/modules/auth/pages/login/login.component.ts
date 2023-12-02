import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ListError } from 'src/app/shared/validators/listError';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //form
  authForm!: FormGroup;
  Error = ListError;
  hide = true;
  isLog = false;

  lable = 'Submit';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    public messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.authForm.controls;
  }

  login() {
    if (this.authForm.valid) {
      this.isLog = true;

      this.lable = '';
      this.isLoading = true;
      this.authservice.loginUser(this.authForm).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.lable = 'Submit';

          //stock both token in localStorage
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('refresh_token', res.token);
          this.authservice.clickButton();
          this.router.navigate(['dashboard']);
        },
        error: (err: any) => {
          console.log(err);

          this.isLoading = false;
          this.lable = 'Submit';

          //remove storage
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('currentUser');

          //show msg erro
          this.messageService.add({
            severity: 'error',
            summary: err.status,
            detail: err.error.message,
            life: 0,
          });

          //delete value from field password
          this.authForm.get('password')!.reset();
        },
      });
    }
  }
}
