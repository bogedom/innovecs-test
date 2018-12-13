import { Component, OnInit } from '@angular/core';
import { Photo } from '../../core/models/photo';
import { PhotosService } from '../../core/services/photos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  photos: Photo[];
  totalSize = 0;

  constructor (
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.photos.map(item => this.totalSize += item.size);
      });
  }

}
