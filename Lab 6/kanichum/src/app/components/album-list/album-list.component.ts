import { Component, input, signal } from '@angular/core';
import { AlbumListItemComponent } from '../album-list-item/album-list-item.component';
import { Album } from '../../models/albums';

@Component({
  selector: 'app-album-list',
  imports: [
    AlbumListItemComponent
  ],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  public albums = input.required<Album[]>();
}
