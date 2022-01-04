import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedReducer } from './state/shared.reducer';
import { SharedEffects } from './state/shared.effects';


@NgModule({
  declarations: [BusyIndicatorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('shared', SharedReducer),
    EffectsModule.forFeature([SharedEffects])
  ],
  exports: [BusyIndicatorComponent]
})
export class SharedModule { }
