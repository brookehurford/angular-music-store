// model

export class Album {
  public sold: boolean = false;
  constructor(public name: string, public artist: string, public price: number, public genre: string) {}
}
