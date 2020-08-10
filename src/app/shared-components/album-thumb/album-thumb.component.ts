import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-thumb',
  templateUrl: './album-thumb.component.html',
  styleUrls: ['./album-thumb.component.scss'],
})
export class AlbumThumbComponent implements OnInit {
  @Input() album;
  @Output() albumClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitAlbum(id) {
    this.albumClicked.emit(id);
  }
}
