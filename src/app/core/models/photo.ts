export class Photo {
  name: string;
  url: string;
  size: number;
  modified: string;

  constructor(name: string, url: string, size?: number, modified?: string) {
    this.name = name;
    this.url = url;
    this.size = size;
    this.modified = modified;
  }
}
