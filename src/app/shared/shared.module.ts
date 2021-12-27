import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [BusyIndicatorComponent]
})
export class SharedModule { }
