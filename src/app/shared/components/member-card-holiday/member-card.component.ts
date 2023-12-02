import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member-card-holiday',
  templateUrl: './member-card-holiday.component.html',
  styleUrls: ['./member-card-holiday.component.scss'],
})
export class MemberCardHolidayComponent {
  @Input()
  cardInfo: any;
}
