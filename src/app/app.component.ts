import { Component } from '@angular/core';
import { FunnelRow } from './horizontal-funnel/horizontal-funnel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'process-visualization';
  
  processFunnelRows: FunnelRow[] = [{
    name: '3rdParty',
    title: '3rd Party',
    segments: [{
      name: 'Leads',
      value: '2,117'
    }, {
      name: 'Appointments',
      value: '22.3%',
      color: 'green',
      // descriptionValue: 'Top 25%: 32.9%'
    }, {
      name: 'testDrives',
      value: '21.7%',
      color: 'green',
      title: 'Test Drives',
      // descriptionValue: 'Top 25%: 34.3%'
    }, {
      name: 'offerToPurchase',
      value: '19.2%',
      color: 'yellow',
      title: 'Offers To Purchase',
      // descriptionValue: 'Top 25%: 23.6%'
    }, {
      name: 'closeRate',
      title: 'Close Rate',
      value: '4.7%',
      color: 'red',
      // descriptionValue: 'Top 25%: 9.1%'
    }]
  }, {
    name: 'Dealer Website',
    title: 'Dealer Website',
    segments: [{
      name: 'Leads',
      value: '2,117'
    }, {
      name: 'Appointments',
      value: '22.3%',
      color: 'green',
      // descriptionValue: 'Top 25%: 32.9%'
    }, {
      name: 'testDrives',
      value: '21.7%',
      color: 'green',
      title: 'Test Drives',
      // descriptionValue: 'Top 25%: 34.3%'
    }, {
      name: 'offerToPurchase',
      value: '19.2%',
      color: 'yellow',
      title: 'Offers To Purchase',
      // descriptionValue: 'Top 25%: 23.6%'
    }, {
      name: 'closeRate',
      title: 'Close Rate',
      value: '4.7%',
      color: 'red',
      // descriptionValue: 'Top 25%: 9.1%'
    }]
  }];
}
