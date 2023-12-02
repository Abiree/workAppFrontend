import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // data1 = {
  //   text: 'Today is Abire Ghallabi Birthday',
  //   icon: 'pi-user',
  //   buttons: [
  //     { label: 'Send Message', outline: false },
  //     { label: 'Say Congrats', outline: true },
  //   ],
  // };
  data1 = {
    text: 'Your compensatory off will expire on 31 Apr 2023',
    // icon: 'pi-exclamation-circle',
    typeIcon: 'info',
    buttons: [{ label: 'Send Reminder', outline: true }],
  };
  data2 = {
    text: 'Your were absent on 13 Apr 2023',
    icon: 'pi-exclamation-circle',
    typeIcon: 'warning',
    buttons: [{ label: 'Send reminder', outline: true }],
  };
}
