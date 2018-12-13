import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photosURLs: string[] = [
    'https://i.imgur.com/iej1j4Y.jpg',
    'https://i.imgur.com/acPx5b5.jpg',
    'https://i.imgur.com/I3GpDoe.jpg',
    'https://i.imgur.com/0zzkP1Q.jpg',
    'https://i.imgur.com/jPEFc4V.jpg',
    'https://i.imgur.com/8h6g1v3.jpg',
    'https://i.imgur.com/AjbzkwY.jpg',
    'https://i.imgur.com/TjWC5DV.jpg',
    'https://i.imgur.com/8Fq9Y87.jpg',
    'https://i.imgur.com/E0h8JXU.jpg',
    'https://i.imgur.com/yC4K5Ia.jpg',
    'https://i.imgur.com/mxDLNky.jpg',
    'https://i.imgur.com/5oYplUh.jpg',
    'https://i.imgur.com/i5vIczp.png',
    'https://i.imgur.com/HodsB5j.jpg',
    'https://i.imgur.com/pKT19fs.jpg',
    'https://i.imgur.com/egByHDG.jpg',
    'https://i.imgur.com/aKs2oS7.jpg',
    'https://i.imgur.com/bxfrr5n.jpg',
    'https://i.imgur.com/x1gstcn.jpg',
  ];

  private photosSubject = new ReplaySubject<Photo[]>();
  photos = this.photosSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
    const photos: Photo[] = [];
    this.photosURLs.map(url => {
      this.getImage(url)
        .subscribe((image: Blob) => {
          const name = url.substring(url.lastIndexOf('/') + 1);
          photos.push(new Photo(name, url, image.size, this.getDateTime()));

          this.photosSubject.next(photos);
        });
    });
  }

  public getPhotos(): Observable<Photo[]> {
    return this.photos;
  }

  public getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  private getDateTime(): string {
    const currentDate = new Date();
    const dateTime = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1)  + '-' + currentDate.getDate() + ' '
      + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    return dateTime;
  }

}
