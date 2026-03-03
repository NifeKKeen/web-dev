import { Component, input, output } from '@angular/core';
import { Album } from '../../models/albums';
import { AlbumListItemComponent } from '../album-list-item/album-list-item.component';

@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [AlbumListItemComponent],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.css'
})
export class AlbumListComponent {
  albums = input.required<Album[]>();
  deleteAlbum = output<number>();
}
