import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListHandwritingService {

  header: Headers;
  options: RequestOptions;
  urlList = 'https://api.handwriting.io/handwritings';
  constructor(private http: Http) { }

  getHandwritings () {
    this.header = new Headers();
    this.header.append('Authorization', 'Basic NDY0NzJLODdGUjlSOFpYTTowMDY4MUc4Mk0yWkZTQVo0');
    this.options = new RequestOptions({headers: this.header});
    return this.http.get(this.urlList, this.options)
    .map((res: Response) => res.json());
  }
}
