import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data1={text:"Today is Abire Ghallabi Birthday",icon:"pi-user",buttons:[{label:"Send Message",outline:false},{label:"Say Congrats",outline:true}]}
}
