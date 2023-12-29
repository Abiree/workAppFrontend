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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
//components
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { MemberCardHolidayComponent } from './components/member-card-holiday/member-card.component';
import { ReminderCardComponent } from './components/reminder-card/reminder-card.component';
import { TeamMemberCardComponent } from './components/team-member-card/team-member-card.component';

@NgModule({
  declarations: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent,
    MemberCardHolidayComponent,
    TeamMemberCardComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    AutoCompleteModule,
    TableModule,
    ProgressBarModule,
    TagModule,
    SliderModule,
    MultiSelectModule,
  ],
  exports: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent,
    MemberCardHolidayComponent,
    TeamMemberCardComponent,
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
    AutoCompleteModule,
    TableModule,
    ProgressBarModule,
    TagModule,
    SliderModule,
    MultiSelectModule,
  ],
})
export class SharedModule {}
