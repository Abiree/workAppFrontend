import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberCardHolidayComponent } from './member-card.component';

describe('MemberCardComponent', () => {
  let component: MemberCardHolidayComponent;
  let fixture: ComponentFixture<MemberCardHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberCardHolidayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberCardHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
