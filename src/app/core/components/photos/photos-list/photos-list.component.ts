import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../../services/photos.service';
import { Photo } from '../../../models/photo';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[];

  constructor(
    private photosService: PhotosService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.photosSortMethod
      .subscribe((method: string) => {
        this.photosService.getPhotos()
          .subscribe((photos: Photo[]) => {
            this.photos = this.sortPhotosBy(photos, method);
          });
      });
  }

  private sortPhotosBy(photos: Photo[], sortBy: string): Photo[] {
    if (sortBy === 'name') {
      return photos.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else if (sortBy === 'size') {
      return photos.sort((a, b) => {
        return b.size - a.size;
      });
    } else if (sortBy === 'modified') {
      return photos.sort((a, b) => {
        return +new Date(b.modified) - +new Date(a.modified);
      });
    } else {
      return photos;
    }
  }

}
