import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.scss'],
})
export class TeamMemberDetailsComponent {
  cardInfo: any = {
    name: 'Abire Ghallabi',
    job: 'Software Engineer',
    type: 'Casual',
    nbr: '2 Days',
    date: '28 Dec 2023 - 29 Dec 2023',
    desc: "Friend's Wedding Celebration",
    image: 'assets/images/profil/abire.jpg',
  };

  navItems = [
    { name: 'Attendance', active: true },
    { name: 'Work log', active: false },
    { name: 'Leaves', active: false },
    { name: 'Details', active: false },
  ];
  navSelected = 'Dashboard';

  stat = { title: '9:16 AM', desc: "Today's in time", icon: 'pi-sort-down' };

  days: any;
  selectedDay: any;

  constructor(private _location: Location, private router: Router) {
    if (router.getCurrentNavigation() != null) {
      this.cardInfo = router.getCurrentNavigation()!.extras;
    }
  }

  ngOnInit(): void {
    console.log(this.router.getCurrentNavigation());
    this.days = [
      { name: 'Daywise', code: 'NY' },
      { name: 'Monthwise', code: 'RM' },
    ];
  }

  back() {
    this._location.back();
  }

  nav(item: any) {
    this.navItems.forEach((e: any) => {
      e.active = false;
    });
    item.active = true;
    this.navSelected = item.name;
  }
}
