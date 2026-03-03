import { Component, input } from '@angular/core';
import { Photo } from '../../models/photos';
import { AlbumPhotosListItemComponent } from '../album-photos-list-item/album-photos-list-item.component';

@Component({
  selector: 'app-album-photos-list',
  standalone: true,
  imports: [AlbumPhotosListItemComponent],
  templateUrl: './album-photos-list.component.html',
  styleUrl: './album-photos-list.component.css'
})
export class AlbumPhotosListComponent {
  photos = input.required<Photo[]>();
}
