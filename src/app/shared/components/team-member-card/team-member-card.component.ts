import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMembersService } from '../../services/team/team-members.service';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss'],
})
export class TeamMemberCardComponent {
  @Input()
  cardInfo: any;

  @Input()
  page: any;

  @Input()
  isMemberNavSelected!: boolean;

  constructor(
    private router: Router,
    private teamMembersService: TeamMembersService
  ) {}

  openDetail() {
    if (this.page == 'team-member') {
      console.log(this.page);
      console.log(this.cardInfo);
      let name = this.cardInfo.name.replace(' ', '_');
      console.log(name);
      this.teamMembersService.setIsMemberNavSelected(true);
      this.router.navigate(['team/' + name], this.cardInfo);
    }
  }
}
