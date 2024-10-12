import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss'],
})
export class TeamMemberComponent {
  @Input()
  isMemberNavSelected!: boolean;

  cardInfos = [
    {
      name: 'Abire Ghallabi',
      job: 'Software Engineer',
      statut: 'Present',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      intime: '9:00 AM',
      worktime: '8h',
      outtime: '6:00 PM',
      breaktime: '1h',
      image: 'assets/images/profil/abire.jpg',
    },
    {
      name: 'Chouaib Eladraoui',
      job: 'Software Engineer',
      statut: 'Absent',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      image: 'assets/images/profil/abire.jpg',
    },
    {
      name: 'Abire Ghallabi',
      job: 'Software Engineer',
      statut: 'Absent',
      date: '28 Dec 2023 - 29 Dec 2023',
      desc: "Friend's Wedding Celebration",
      image: 'assets/images/profil/abire.jpg',
    },
  ];
}
