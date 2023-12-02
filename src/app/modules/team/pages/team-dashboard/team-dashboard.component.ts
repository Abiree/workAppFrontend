import { Component } from '@angular/core';

@Component({
  selector: 'app-team-dashboard',
  templateUrl: './team-dashboard.component.html',
  styleUrls: ['./team-dashboard.component.scss'],
})
export class TeamDashboardComponent {
  navItems = [
    { name: 'Dashboard', active: true },
    { name: 'Members', active: false },
  ];

  data = {
    text: 'Abire Ghallabi was absent on 01 Dec 2023 without any intimation',
    icon: 'pi-exclamation-circle',
    typeIcon: 'info',
    buttons: [{ label: 'Send Reminder', outline: true }],
  };

  cardInfos = [
    {
      name: 'Abire Ghallabi',
      job: 'Software Engineer',
      type: 'Casual',
      nbr: '2 Days',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      image: 'assets/images/profil/abire.jpg',
    },
    {
      name: 'Abire Ghallabi',
      job: 'Software Engineer',
      type: 'Casual',
      nbr: '2 Days',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      image: 'assets/images/profil/abire.jpg',
    },
    {
      name: 'Abire Ghallabi',
      job: 'Software Engineer',
      type: 'Casual',
      nbr: '2 Days',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      image: 'assets/images/profil/abire.jpg',
    },
  ];
}
