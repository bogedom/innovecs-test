import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../../../models/photo';

@Component({
  selector: 'app-photos-list-item',
  templateUrl: './photos-list-item.component.html',
  styleUrls: ['./photos-list-item.component.scss']
})
export class PhotosListItemComponent implements OnInit {

  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
