import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from '../../models/imovie';
import { ISceance } from '../../models/isceance';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input() movie! : IMovie;
  @Output() book_emitter : EventEmitter<> = new EventEmitter<>()

  book_seats(seances : ISceance) : void{
    seances.nb_seats--;
  }
}
