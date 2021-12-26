import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusyIndicatorServiceService } from './busy-indicator-service.service';

@Component({
  selector: 'app-busy-indicator',
  templateUrl: './busy-indicator.component.html',
  styleUrls: ['./busy-indicator.component.scss']
})
export class BusyIndicatorComponent implements OnInit {

  loading$: Observable<boolean>;

  constructor(private busyIndicatorServiceService: BusyIndicatorServiceService) { }

  ngOnInit(): void {
    this.loading$ = this.busyIndicatorServiceService.loadingSub$;
  }
}
