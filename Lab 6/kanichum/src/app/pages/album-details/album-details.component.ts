import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/albums';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);

  album = signal<Album | null>(null);
  editTitle = signal<string>('');

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album.set(data);
      this.editTitle.set(data.title);
    });
  }

  save() {
    const current = this.album();
    if (current) {
      const updatedAlbum: Album = { ...current, title: this.editTitle() };
      this.albumService.updateAlbum(updatedAlbum).subscribe(data => {
        this.album.set(data);
        alert('Album updated successfully!');
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
