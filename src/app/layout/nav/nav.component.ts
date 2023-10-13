import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


  navItems=[
    {name:"",icon:"pi-chart-line",active:true,notifNumber:null,routerLink:'dashboard'},
    {name:"",icon:"pi-users",active:false,notifNumber:null,routerLink:'team'},
    {name:"",icon:"pi-clock",active:false,notifNumber:null,routerLink:'timing'},
    {name:"",icon:"pi-bell",active:false,notifNumber:null,routerLink:'notif'},
    {name:"",icon:"pi-calendar",active:false,notifNumber:null,routerLink:'calendar'},
    {name:"pi-cog",icon:"pi-cog",active:false,notifNumber:null,routerLink:'settings'}
]

}
