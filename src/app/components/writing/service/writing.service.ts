import { DataHandWriting } from '../../../entities/dataHandWriting';
import { Headers, Http, RequestOptions, Response, ResponseContentType, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WritingService {
  options: RequestOptions;
  urlDocument = 'https://api.handwriting.io/render/';
  header: Headers;
  constructor(private http: Http) { }

  getDocument(dhw: DataHandWriting) {
    const params: URLSearchParams = new URLSearchParams();
    this.header = new Headers();
    params.set('handwriting_size', dhw.size);
    console.log(dhw.color);
    params.set('handwriting_color', dhw.color); // .replace('#', '%23')
    params.set('width', dhw.width);
    params.set('height', dhw.height);
    params.set('line_spacing', dhw.lineSpacing);
    params.set('line_spacing_variance', dhw.lineSpacingVar);
    params.set('random_seed', dhw.randomSeed);
    params.set('handwriting_id', dhw.handwriting_id);
    params.set('text', dhw.text.replace(/\r\n|\r|\n/g, '%0A'));
    params.set('word_spacing_variance', dhw.wordSpacing);
    this.header.append('Content-Type', 'image/png');

    // convertion of the username and password to a base64 code // Username : 46472K87FR9R8ZXM // Password: 00681G82M2ZFSAZ4
    this.header.append('Authorization', 'Basic NDY0NzJLODdGUjlSOFpYTTowMDY4MUc4Mk0yWkZTQVo0');

    this.options = new RequestOptions({ params: params, headers: this.header, responseType: ResponseContentType.Blob });

    return this.http.get(this.urlDocument + dhw.type, this.options)
  .map((res: Response) => res.blob());

}

}
