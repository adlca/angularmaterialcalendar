// import { Component, Injectable, Inject, Directive, Input } from '@angular/core';
// import { DateAdapter } from '@angular/material/core';
// import {
//   MatDateRangeSelectionStrategy,
//   DateRange,
//   MatDatepicker,
//   MatDateRangePicker,
//   MAT_DATE_RANGE_SELECTION_STRATEGY,
// } from '@angular/material/datepicker';
// import * as moment from 'moment';

// @Injectable()
// export class MaxRangeSelectionStrategy<D>
//   implements MatDateRangeSelectionStrategy<D>
// {
//   start: any;
//   public delta: number = 10;
//   constructor(private _dateAdapter: DateAdapter<D>) {}

//   selectionFinished(date: D, currentRange: DateRange<D>) {
//     // console.log(date);
//     // console.log(currentRange);

//     let { start, end } = currentRange;
//     if (start == null || (start && end)) {
//       start = date;
//       end = null;
//     } else if (end == null) {
//       const maxDate = this._dateAdapter.addCalendarDays(start, this.delta);
//     //   end = date ? (date > maxDate ? maxDate : date) : null;
//       end = maxDate;
//     }
//     let trans:any=date;
//     console.log(trans.month())
//     console.log(moment().month());
//     return new DateRange<D>(start, end);
//   }

//   createPreview(
//     activeDate: D | null,
//     currentRange: DateRange<D>
//   ): DateRange<D> {

//     // console.log(currentRange.start, currentRange.end);

//     // if (currentRange.start && !currentRange.end) {
//     //   const maxDate = this._dateAdapter.addCalendarDays(
//     //     currentRange.start,
//     //     this.delta
//     //   );
//     //   const rangeEnd = activeDate
//     //     ? activeDate > maxDate
//     //       ? maxDate
//     //       : activeDate
//     //     : null;

//     //   return new DateRange(currentRange.start, rangeEnd);
//     // }

//     return new DateRange<D>(activeDate,currentRange.start );
//   }
// }

// @Directive({
//   selector: '[maxRange]',
//   providers: [
//     {
//       provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
//       useClass: MaxRangeSelectionStrategy,
//     },
//   ],
// })
// export class MaxRangeDirective {
//   constructor(
//     @Inject(MAT_DATE_RANGE_SELECTION_STRATEGY)
//     private maxRangeStrategy: MaxRangeSelectionStrategy<any>
//   ) {}
//   @Input() set maxRange(value: number) {
//     this.maxRangeStrategy.delta = +value || 7;
//   }
// }
