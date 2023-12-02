import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
//components
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { MemberCardHolidayComponent } from './components/member-card-holiday/member-card.component';
import { ReminderCardComponent } from './components/reminder-card/reminder-card.component';

@NgModule({
  declarations: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent,
    MemberCardHolidayComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent,
    MemberCardHolidayComponent,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
    ProgressSpinnerModule,
    DialogModule,
    InputTextModule,
    DividerModule,
  ],
})
export class SharedModule {}
