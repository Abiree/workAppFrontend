import { Component } from '@angular/core';
import { TeamMembersService } from 'src/app/shared/services/team/team-members.service';

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
  navSelected = 'Dashboard';

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

  constructor(private teamMemberService: TeamMembersService) {}
  ngOnInit(): void {
    const bool = this.teamMemberService.getIsMemberNavSelected();
    if (bool) {
      this.nav(this.navItems[1]);
    }
  }

  nav(item: any) {
    this.navItems.forEach((e: any) => {
      e.active = false;
    });
    item.active = true;
    this.navSelected = item.name;
  }
}
