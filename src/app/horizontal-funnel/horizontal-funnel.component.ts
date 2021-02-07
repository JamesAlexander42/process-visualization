import { Component, OnInit } from '@angular/core';
import { FunnelRow, Segment } from './horizontal-funnel.model';

@Component({
  selector: 'sd-horizontal-funnel',
  templateUrl: './horizontal-funnel.component.html',
  styleUrls: ['./horizontal-funnel.component.scss']
})
export class HorizontalFunnelComponent implements OnInit {



  funnelRows: FunnelRow[] = [{
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
  }];

  ngOnInit(): void {
  }

  getSegmentsForDisplay(row: FunnelRow): {
    segment: Segment,
    value: string,
    classes: string[],
    path?: string,
    pathClass: string
  }[] {
    return row.segments.map((s, idx) => ({
      segment: s,
      value: s.value,
      classes: [
        'box',
        'box-' + (s.color || 'gray'),
        'box' + (idx + 1)
      ],
      path: idx != row.segments.length - 1 ? this.calculatePath(s, idx) : undefined,
      pathClass: `box-${s.color || 'gray'}`
    }));
  }

  calculatePath = (segment: Segment, idx: number): string => `M0,${idx * 5} L25,${5 + (idx * 5)} L25,${95 - (idx * 5)} L0,${100 - (idx * 5)}z`;

}
