import { Component } from '@angular/core';
import { AlbumPhotosListItemComponent } from '../album-photos-list-item/album-photos-list-item.component';

@Component({
  selector: 'app-album-photos-list',
  imports: [
    AlbumPhotosListItemComponent
  ],
  templateUrl: './album-photos-list.component.html',
  styleUrl: './album-photos-list.component.css'
})
export class AlbumPhotosListComponent {

}
