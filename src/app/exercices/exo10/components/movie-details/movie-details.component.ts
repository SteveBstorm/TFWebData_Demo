import { ISceance } from './../../models/isceance';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '../../models/imovie';
import { ISceanceId } from '../../models/isceance-id';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() movie! : IMovie;
  @Output() book_emitter : EventEmitter<ISceanceId> = new EventEmitter<ISceanceId>()

  book_seats(sceances : ISceance) : void{
    if(sceances.nb_seats <= 0) return;
    this.book_emitter.next({
      movie_title : this.movie.title,
      sceance_num : sceances.num_room,
      sceance_date : sceances.date});
  }
}
