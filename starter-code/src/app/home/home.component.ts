import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: object[];

  constructor(private cinema: CinemaService) { }

  ngOnInit() {
    this.movies = this.cinema.getMovies();
  }

  getWidth() {
    return `${Math.floor(100 / this.movies.length)}%`;
  }

}
