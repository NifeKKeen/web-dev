import { Component } from '@angular/core';
import { AlbumListComponent } from '../../components/album-list/album-list.component';

@Component({
  selector: 'app-albums',
  imports: [
    AlbumListComponent
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

}
