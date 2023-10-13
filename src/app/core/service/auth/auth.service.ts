import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { ApiPaths } from 'src/app/shared/enums/apiPath';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  baseUrl = environment.baseURL;
  userUrl=this.baseUrl+ApiPaths.Users;
  userSignIn=this.baseUrl+ApiPaths.SignIn;
  userSignUp=this.baseUrl+ApiPaths.SignUp;
  userForgotPassword=this.baseUrl+ApiPaths.ForgetPassword;
  userResetPassword=this.baseUrl+ApiPaths.ResetPassword;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  isMatch = false;
  userRole: any;


  private buttonClickedSource = new Subject<void>();
  buttonClicked$ = this.buttonClickedSource.asObservable();

  constructor(
    private http:HttpClient,
    public router: Router,
    public messageService: MessageService) { }

    clickButton() {
      this.buttonClickedSource.next();
    }


  loginUser(user:any){
    return this.http.post<any>(this.userSignIn, user.value);
  }

  postUser(user:any){
    return this.http.post<any>(this.userSignUp, user);
  }

  confirmMail(url:any){
    return this.http.get(url,{responseType:'text'});
  }

  //get token from localstorage
  getToken() {
    return localStorage.getItem('access_token');
  }

  //Check if user is loggin
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    if (authToken) {
      const expiry = JSON.parse(atob(authToken.split('.')[1])).exp;
      if (Math.floor(new Date().getTime() / 1000) >= expiry) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('currentUser');
      }
      console.log(Math.floor(new Date().getTime() / 1000) <= expiry)
      return Math.floor(new Date().getTime() / 1000) <= expiry;
    }

    return false;
  }

  //get Role()
getRole(){
  let user = localStorage.getItem('currentUser');
  if (user) {
    let user_json = JSON.parse(user);
    return user_json.role;
  }
}

  //Role match

 
  roleMatch(allowedRoles: Array<string>): boolean {
  
    if (allowedRoles) {
      return allowedRoles.includes(this.getRole());
    }
   
    return false;
  }

  //logout

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeToken2 = localStorage.removeItem('refresh_token');
    let removeCurrentUser = localStorage.removeItem('currentUser');
  
   
    
    if (
      removeToken == null &&
      removeToken2 == null &&
      removeCurrentUser == null  
    ) {
      this.router.navigate(['home']);
    }
  }


  //forgetPassword
  forgotPassword(user_email: any): Observable<any> {
    return this.http.post(this.userForgotPassword, user_email, {
      responseType: 'text',
    });
  }

  //resetPassword
  resetPassword(user_info: any,token:any): Observable<any> {
    return this.http.post(this.userResetPassword+"?token"+token, user_info, {
      responseType: 'text',
    });
  }
}
