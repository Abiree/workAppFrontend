import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.scss'],
})
export class ReminderCardComponent {
  @Input()
  reminderData: any;
}
