import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './core/components/photos/photos.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';
import { FilesComponent } from './core/components/files/files.component';
import { SharedComponent } from './core/components/shared/shared.component';
import { LinksComponent } from './core/components/links/links.component';
import { EventsComponent } from './core/components/events/events.component';
import { GetStartedComponent } from './core/components/get-started/get-started.component';
import { MainHeaderComponent } from './layout/main/main-header/main-header.component';
import { MainBodyComponent } from './layout/main/main-body/main-body.component';
import { PhotosListComponent } from './core/components/photos/photos-list/photos-list.component';
import { PhotosListItemComponent } from './core/components/photos/photos-list/photos-list-item/photos-list-item.component';
import { PhotosService } from './core/services/photos.service';
import { PhotosHeaderComponent } from './core/components/photos/photos-header/photos-header.component';
import { DataService } from './core/services/data.service';
import { FileSizePipe } from './core/ui/file-size.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    SidebarComponent,
    LayoutComponent,
    MainComponent,
    FilesComponent,
    SharedComponent,
    LinksComponent,
    EventsComponent,
    GetStartedComponent,
    MainHeaderComponent,
    MainBodyComponent,
    PhotosListComponent,
    PhotosListItemComponent,
    PhotosHeaderComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PhotosService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
