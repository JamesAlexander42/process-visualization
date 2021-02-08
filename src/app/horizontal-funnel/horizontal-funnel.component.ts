import { Component, Input, OnInit } from '@angular/core';
import { FunnelRow, Segment } from './horizontal-funnel.model';

@Component({
  selector: 'sd-horizontal-funnel',
  templateUrl: './horizontal-funnel.component.html',
  styleUrls: ['./horizontal-funnel.component.scss']
})
export class HorizontalFunnelComponent implements OnInit {

  @Input() funnelRows: FunnelRow[] = [];

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
