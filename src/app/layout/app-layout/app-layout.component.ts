import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  auth=false;
  constructor( private authService:AuthService){
  
  }

  ngOnInit(): void {

    this.subscribeToLoginDone();
    this.isLoging();

    
  }

  subscribeToLoginDone(){
    this.authService.buttonClicked$.subscribe(() => {
      this.isLoging();
    });
  }

  isLoging(){
    console.log("ggg")
    this.auth=this.authService.isLoggedIn;
    console.log(this.authService.isLoggedIn)
  }


}
