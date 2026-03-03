import { Component, input } from '@angular/core';
import { Photo } from '../../models/photos';

@Component({
  selector: 'app-album-photos-list-item',
  standalone: true,
  templateUrl: './album-photos-list-item.component.html',
  styleUrl: './album-photos-list-item.component.css'
})
export class AlbumPhotosListItemComponent {
  photo = input.required<Photo>();
}
