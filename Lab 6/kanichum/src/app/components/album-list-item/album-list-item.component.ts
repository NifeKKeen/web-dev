import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/albums';

@Component({
  selector: 'app-album-list-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-list-item.component.html',
  styleUrl: './album-list-item.component.css'
})
export class AlbumListItemComponent {
  album = input.required<Album>();
  delete = output<number>();
}
