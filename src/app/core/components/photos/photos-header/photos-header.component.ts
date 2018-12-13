import { Component, OnInit } from '@angular/core';
import { PhotosSortTab } from '../../../models/photos-sort-tab';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-photos-header',
  templateUrl: './photos-header.component.html',
  styleUrls: ['./photos-header.component.scss']
})
export class PhotosHeaderComponent implements OnInit {

  selectedTab: PhotosSortTab;
  tabs: PhotosSortTab[] = [
    new PhotosSortTab('Name', 'name'),
    new PhotosSortTab('Size', 'size'),
    new PhotosSortTab('Modified', 'modified')];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.photosSortMethod
      .subscribe((method: string) => {
        this.selectedTab = this.tabs.find(item => item.method === method);
      });
  }

  onChangeTab(tab: PhotosSortTab) {
    this.selectedTab = tab;
    this.dataService.changePhotosSortMethod(this.selectedTab.method);
  }

}
