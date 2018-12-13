import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private photosSortSubject = new BehaviorSubject<string>('name');
  photosSortMethod = this.photosSortSubject.asObservable();

  constructor() { }

  changePhotosSortMethod(method: string) {
    this.photosSortSubject.next(method);
  }
}
