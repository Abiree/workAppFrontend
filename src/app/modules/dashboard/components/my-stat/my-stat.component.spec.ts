import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStatComponent } from './my-stat.component';

describe('MyStatComponent', () => {
  let component: MyStatComponent;
  let fixture: ComponentFixture<MyStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
