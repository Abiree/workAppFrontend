import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//modules
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//components
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { ReminderCardComponent } from './components/reminder-card/reminder-card.component';


@NgModule({
  declarations: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ChartModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    StatCardComponent,
    VerticalBarComponent,
    ReminderCardComponent,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SharedModule { }
