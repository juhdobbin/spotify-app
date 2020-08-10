import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  public albumId;
  public album;
  public playing;
  public trackName;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    this.albumId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getAlbumDetails();
  }

  getAlbumDetails() {
    this.albumService.getAlbumDetails(this.albumId).subscribe(
      (res) => this.album = res,
      (err) => console.log(err)
    );
  }

  openAudioPlayer(preview_url, trackName) {
    if(preview_url) {
      this.trackName = trackName;
      this.playing = preview_url;
    }
  }
}
