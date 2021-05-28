import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import * as moment from 'moment';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    // dateInput: 'LL',
    dateInput: 'DD [de] MMMM',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-calendar-input',
  templateUrl: './calendar-input.component.html',
  styleUrls: ['./calendar-input.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    
  ],
})
export class CalendarInputComponent implements OnInit {
  @Input() maxCalendarDate: Date = moment().toDate();
  @Output() clearDateInputs: EventEmitter<any> = new EventEmitter();

  calendarButtonActive: boolean = false;

  constructor() {}

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  extended = false;
  dateStartValue: any;

  ngOnInit() {
    // console.log(this.maximope);
    console.log(moment());
  }

  title = 'playingwithmaterial';

  action(value: MatDateRangePicker<any>) {
    value.close();
  }

  action2(value: MatDateRangePicker<any>) {
    console.log(value);
    console.log(value.datepickerInput.getStartValue());
    // value.
    value.close();
  }

  onCalendarOpen() {
    // console.log(value);
    console.log('open');
    this.calendarButtonActive = true;
  }

  onCalendarClose() {
    console.log('close');
    this.calendarButtonActive = false;
  }

  test() {
    console.log('cambio mes');
  }

  description(value: any) {
    console.log(value);
  }

  cambioFecha(value: any) {
    console.log(value);
  }

  calendarioVista(value: any) {
    console.log(value);
    console.log('vista cambiada');
  }

  ngAfterViewInit(): void {
    console.log('after');
    const BACK_BUTTON = document.querySelector('.mat-calendar-previous-button');
    const FORWARD_BUTTON = document.querySelector('.mat-calendar-next-button');
    if (BACK_BUTTON) {
      console.log('un mes atras');
    }
    if (FORWARD_BUTTON) {
      console.log('un mes delante');
    }
  }

  firstInputChange(value: any) {
    console.log(value.target.value);
    // value.target.value=moment(value.target.value).format("DD")
    // console.log(value.target.value)
  }

  cancelButton() {
    console.log('cancel');
  }

  clearInputs() {
    this.range.reset();
  }

  messageResult(startdate: string, enddate?: string): string {
    let result = '';
    let monthNameTitlecase = startdate.split(' ')[2];
    monthNameTitlecase =
      monthNameTitlecase.charAt(0).toUpperCase() + monthNameTitlecase.slice(1);
    if (enddate) {
      result = `Del ${startdate.substr(0, 2)} al ${enddate.substr(
        0,
        2
      )} de ${monthNameTitlecase}`;
    } else {
      result = `Del ${startdate.substr(0, 2)} al ${startdate.substr(
        0,
        2
      )} de ${monthNameTitlecase}`;
    }
    return result;
  }

  datechangeado(){
    console.log("cambiao");
    
  }
}
