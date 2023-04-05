import { Component } from '@angular/core';
import { IMovie } from '../../models/imovie';
import { ISceanceId } from '../../models/isceance-id';
import { ISceance } from '../../models/isceance';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {
  movies : IMovie[] = [];

  selected_movie? : IMovie;

  constructor(){
    this.movies.push(
      {
      title : 'Dungeons & dragons',
      description : 'Movie based on a popular board game.',
      duration : 120,
      poster_url : '/assets/images/PostersFilms/dungeons_and_dragons_honor_among_thieves_ver3.jpg',
      sceances : [
        {num_room : 1, date : new Date(2023,3,4,17,0,0), nb_seats:15},
        {num_room : 1, date : new Date(2023,3,4,20,30,0), nb_seats:15},
        {num_room : 2, date : new Date(2023,3,4,18,30,0), nb_seats:10}
      ]
    }
    );
    this.movies.push(
      {
      title : 'Drop',
      description : 'Movie based on a drug and thiefs polar.',
      duration : 150,
      poster_url : '/assets/images/PostersFilms/drop.jpg',
      sceances : [
        {num_room : 2, date : new Date(2023,3,4,17,0,0), nb_seats:10},
        {num_room : 2, date : new Date(2023,3,4,20,30,0), nb_seats:10},
        {num_room : 3, date : new Date(2023,3,4,18,30,0), nb_seats:20}
      ]
    }
    );
    this.movies.push(
      {
      title : 'Infinity pool',
      description : 'Movie based on an infinity pool.',
      duration : 100,
      poster_url : '/assets/images/PostersFilms/infinity_pool.jpg',
      sceances : [
        {num_room : 2, date : new Date(2023,3,4,17,0,0), nb_seats:10},
        {num_room : 2, date : new Date(2023,3,4,20,30,0), nb_seats:10},
        {num_room : 3, date : new Date(2023,3,4,18,30,0), nb_seats:20}
      ]
    }
    );
  }

  select_movie(movie : IMovie){
    this.selected_movie = movie;
  }

  sub_sceance(sceance_id : ISceanceId){
    let movie : IMovie | undefined = this.movies.find(m => m.title == sceance_id.movie_title);
    if(!movie) return;
    let sceance : ISceance | undefined = movie.sceances.find(s => s.num_room == sceance_id.sceance_num && s.date == sceance_id.sceance_date);
    if(!sceance) return;
    sceance.nb_seats --;
  }
}
