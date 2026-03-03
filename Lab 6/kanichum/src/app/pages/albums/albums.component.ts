import { Component, inject, OnInit, signal } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/albums';
import { AlbumListComponent } from '../../components/album-list/album-list.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumListComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  albums = signal<Album[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  handleDelete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(
      () => {
        alert('Album deleted successfully');
        this.albums.update(current => current.filter(a => a.id !== id));
      },
      () => {
        alert('Error deleting album');
      }
    )
  }
}
