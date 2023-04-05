import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/imovie';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss']
})
export class MoviesListItemComponent {
  @Input() movie! : IMovie;
}
