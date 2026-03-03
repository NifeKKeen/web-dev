import { Component, signal } from '@angular/core';
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
  protected albums = signal<Album[]>([
    {
      id: 1,
      title: 'Album 1',
      coverSrc: '/tornado.png',
      date: '2023-01-01',
    },
    {
      id: 2,
      title: 'Album 2',
      coverSrc: '/zoo-poster.png',
      date: '2023-02-01',
    }
  ])
}
