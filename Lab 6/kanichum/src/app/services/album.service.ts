import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album, Photo } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.baseUrl).pipe(
      map(albums => albums.map(album => ({
        ...album,
        // Using LoremFlickr with the lock parameter for consistent pseudo-random images per ID
        coverSrc: `https://loremflickr.com/300/300/album?lock=${album.id}`
      })))
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/${id}`).pipe(
      map(album => ({
        ...album,
        coverSrc: `https://loremflickr.com/300/300/album?lock=${album.id}`
      }))
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/${id}/photos`).pipe(
      map(photos => photos.map(photo => ({
        ...photo,
        thumbnailUrl: `https://loremflickr.com/150/150/abstract?lock=${photo.id}`,
        url: `https://loremflickr.com/600/600/abstract?lock=${photo.id}`
      })))
    );
  }

  updateAlbum(album: Album): Observable<Album> {
    const { coverSrc, ...albumPayload } = album;
    return this.http.put<Album>(`${this.baseUrl}/${album.id}`, albumPayload).pipe(
      map(updatedAlbum => ({
        ...updatedAlbum,
        coverSrc: `https://loremflickr.com/300/300/album?lock=${updatedAlbum.id}`
      }))
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
