import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieId: Number;
  movie: object;

  constructor(private cinema: CinemaService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = Number(params['id']) );
  }

  ngOnInit() {
    this.movie = this.cinema.getMovie(this.movieId);
  }

}
