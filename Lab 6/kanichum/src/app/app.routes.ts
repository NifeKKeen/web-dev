import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { AlbumPhotosComponent } from './pages/album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums:id', component: AlbumDetailsComponent },
  { path: 'albums:id/photos', component: AlbumPhotosComponent },
];
