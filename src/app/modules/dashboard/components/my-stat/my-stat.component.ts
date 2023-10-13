import { Component } from '@angular/core';

@Component({
  selector: 'app-my-stat',
  templateUrl: './my-stat.component.html',
  styleUrls: ['./my-stat.component.scss']
})
export class MyStatComponent {

  stats=[
    {title:"9:16 AM",desc:"Today's in time",icon:"pi-sort-down"},
    {title:"45 m",desc:"Break Time*",icon:"pi-stopwatch"},
    {title:"4 h 23 m",desc:"Work Time*",icon:"pi-briefcase"},
    {title:"3",desc:"Tasks in progress",icon:"pi-reply"}]
}
