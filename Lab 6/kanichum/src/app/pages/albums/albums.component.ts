import { Component, inject, signal } from '@angular/core';
import { AlbumListComponent } from '../../components/album-list/album-list.component';
import { Album } from '../../models/albums';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [
    AlbumListComponent,
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  protected albumService = inject(AlbumService);

  protected albums = signal<Album[] | null>(null);
  // [
  //   {
  //     id: 1,
  //     title: 'Album 1',
  //     coverSrc: '/tornado.png',
  //     date: '2023-01-01',
  //   },
  //   {
  //     id: 2,
  //     title: 'Album 2',
  //     coverSrc: '/zoo-poster.png',
  //     date: '2023-02-01',
  //   }
  // ];

  ngOnInit() {
    this.albumService.getAlbums().subscribe(albums => {
      console.log(albums)
      this.albums.set(albums);
    })
  }
}
