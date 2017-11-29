import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { MOVIES } from './sample-movies';

@Injectable()
export class CinemaService {
  movies = MOVIES;

  constructor() { }

  getMovies() {
    return this.movies;
  }
  getMovie(slug) {
    let movie: object = {};
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].slug === slug) {
        movie = this.movies[i];
        break;
      }
    }
    return movie;
  }

}
