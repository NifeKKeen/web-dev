import { Component, input } from '@angular/core';
import { Album } from '../../models/albums';

@Component({
  selector: 'app-album-list-item',
  imports: [],
  templateUrl: './album-list-item.component.html',
  styleUrl: './album-list-item.component.css'
})
export class AlbumListItemComponent {
  public album = input.required<Album>();
}
