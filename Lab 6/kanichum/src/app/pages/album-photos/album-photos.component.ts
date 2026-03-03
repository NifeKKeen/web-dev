import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photos';
import { AlbumPhotosListComponent } from '../../components/album-photos-list/album-photos-list.component';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterLink, AlbumPhotosListComponent],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  albumId = signal<number>(0);
  photos = signal<Photo[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId.set(id);
    this.albumService.getAlbumPhotos(id).subscribe(data => {
      this.photos.set(data);
      this.loading.set(false);
    });
  }
}
