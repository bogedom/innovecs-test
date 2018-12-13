import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListItemComponent } from './photos-list-item.component';

describe('PhotosListItemComponent', () => {
  let component: PhotosListItemComponent;
  let fixture: ComponentFixture<PhotosListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
