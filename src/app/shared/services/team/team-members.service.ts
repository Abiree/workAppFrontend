import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  isMemberNavSelected = false;
  constructor() {}

  getIsMemberNavSelected() {
    return this.isMemberNavSelected;
  }

  setIsMemberNavSelected(isSelected: boolean) {
    this.isMemberNavSelected = isSelected;
  }
}
