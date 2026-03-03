import { Component } from '@angular/core';
import { AlbumPhotosListComponent } from '../../components/album-photos-list/album-photos-list.component';

@Component({
  selector: 'app-album-photos',
  imports: [
    AlbumPhotosListComponent
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {

}
