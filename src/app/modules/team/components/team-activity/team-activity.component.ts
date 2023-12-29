import { Component } from '@angular/core';

@Component({
  selector: 'app-team-activity',
  templateUrl: './team-activity.component.html',
  styleUrls: ['./team-activity.component.scss'],
})
export class TeamActivityComponent {
  days: any;
  selectedDay: any;

  items = [{ name: 'Abire Ghallabi' }, { name: 'Abire' }];
  selectedSearchItem: any;
  filteredItems: any;

  ngOnInit(): void {
    this.days = [
      { name: 'Daywise', code: 'NY' },
      { name: 'Monthwise', code: 'RM' },
    ];
  }

  search(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.items as any[]).length; i++) {
      let country = (this.items as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredItems = filtered;
  }
}
