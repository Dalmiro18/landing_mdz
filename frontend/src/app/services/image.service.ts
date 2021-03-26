import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Images } from '../models/images'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly URL_API = 'http://localhost:3000/api/images';

  constructor(private http: HttpClient) { }

  createImage(image) {
    const fd = new FormData();
    fd.append('image', image)
    return this.http.post(this.URL_API, fd)
  }
  getImages(){
    return this.http.get(this.URL_API)
  }
}
