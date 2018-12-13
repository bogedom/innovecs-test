import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {PhotosComponent} from './core/components/photos/photos.component';
import {FilesComponent} from './core/components/files/files.component';
import {SharedComponent} from './core/components/shared/shared.component';
import {LinksComponent} from './core/components/links/links.component';
import {EventsComponent} from './core/components/events/events.component';
import {GetStartedComponent} from './core/components/get-started/get-started.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'photos' },
        { path: 'files', component: FilesComponent },
        { path: 'photos', component: PhotosComponent },
        { path: 'shared', component: SharedComponent},
        { path: 'links', component: LinksComponent },
        { path: 'events', component: EventsComponent },
        { path: 'get-started', component: GetStartedComponent },
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
