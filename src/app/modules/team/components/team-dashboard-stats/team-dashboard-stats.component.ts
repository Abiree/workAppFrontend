import { Component } from '@angular/core';

@Component({
  selector: 'app-team-dashboard-stats',
  templateUrl: './team-dashboard-stats.component.html',
  styleUrls: ['./team-dashboard-stats.component.scss'],
})
export class TeamDashboardStatsComponent {
  stats = [
    { title: '9:16 AM', desc: "Today's in time", icon: 'pi-sort-down' },
    { title: '45 m', desc: 'Break Time*', icon: 'pi-stopwatch' },
    { title: '4 h 23 m', desc: 'Work Time*', icon: 'pi-briefcase' },
    { title: '3', desc: 'Tasks in progress', icon: 'pi-reply' },
  ];

  days: any;
  selectedDay: any;

  ngOnInit(): void {
    this.days = [
      { name: 'Daywise', code: 'NY' },
      { name: 'Monthwise', code: 'RM' },
    ];
  }
}
