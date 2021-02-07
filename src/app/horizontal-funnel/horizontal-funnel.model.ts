export class FunnelRow {
  constructor(
    public name: string,
    public segments: Segment[],
    public title?: string
  ) {

  }
}

export class Segment {
  constructor(
    public name: string,
    public value: string,
    public color?: string,
    public title?: string,
    public descriptionValue?: string,
  ) { }
}
