import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Media} from '../Models/Media.model';

@Injectable()
export class MediaService{
  private mediaUrl: string;

  constructor(private http: HttpClient) {
    this.mediaUrl = '/Media';
  }
  getMediaList(): Observable<any> {
    console.log('1');
    return this.http.get(`${this.mediaUrl}`);
  }
}
