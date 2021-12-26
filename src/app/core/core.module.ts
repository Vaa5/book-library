import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpRequestInterceptor } from './interceptors/http-request-interceptor';
import { AppRoutingModule } from '../app-routing.module';

// tslint:disable-next-line:typedef
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

@NgModule({
  declarations: [ToolbarComponent, BusyIndicatorComponent],
  imports: [
    CommonModule, AppRoutingModule, MaterialModule
  ],
  exports: [BrowserAnimationsModule, HttpClientModule, AppRoutingModule, ToolbarComponent, BusyIndicatorComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
