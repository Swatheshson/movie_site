import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'stand-web';

  movies: Movie[] = [
    {
      title: "Justice League: The Flashpoint Paradox",
      ReleaseDate: 2013,
      Genre: "Animation, Action, Adventure",
      Rating: 7.9,
      Duration: "1h 15m"
    },
    {
      title: "Justice League: War",
      ReleaseDate: 2014,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.2,
      Duration: "1h 19m"
    },
    {
      title: "Son of Batman",
      ReleaseDate: 2014,
      Genre: "Animation, Action, Adventure",
      Rating: 6.7,
      Duration: "1h 14m"
    },
    {
      title: "Justice League: Throne of Atlantis",
      ReleaseDate: 2015,
      Genre: "Animation, Action, Adventure",
      Rating: 6.7,
      Duration: "1h 12m"
    },
    {
      title: "Batman vs. Robin",
      ReleaseDate: 2015,
      Genre: "Animation, Action, Adventure",
      Rating: 7.0,
      Duration: "1h 20m"
    },
    {
      title: "Batman: Bad Blood",
      ReleaseDate: 2016,
      Genre: "Animation, Action, Adventure",
      Rating: 6.8,
      Duration: "1h 12m"
    },
    {
      title: "Justice League vs. Teen Titans",
      ReleaseDate: 2016,
      Genre: "Animation, Action, Adventure",
      Rating: 6.9,
      Duration: "1h 18m"
    },
    {
      title: "Justice League Dark",
      ReleaseDate: 2017,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.0,
      Duration: "1h 15m"
    },
    {
      title: "Teen Titans: The Judas Contract",
      ReleaseDate: 2017,
      Genre: "Animation, Action, Adventure",
      Rating: 7.0,
      Duration: "1h 24m"
    },
    {
      title: "Suicide Squad: Hell to Pay",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.0,
      Duration: "1h 26m"
    },
    {
      title: "The Death of Superman",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 7.3,
      Duration: "1h 21m"
    },
    {
      title: "Constantine: City of Demons",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.4,
      Duration: "1h 30m"
    },
    {
      title: "Reign of the Supermen",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 6.8,
      Duration: "1h 27m"
    },
    {
      title: "Batman: Hush",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Adventure",
      Rating: 6.9,
      Duration: "1h 21m"
    },
    {
      title: "Wonder Woman: Bloodlines",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Fantasy",
      Rating: 5.9,
      Duration: "1h 23m"
    },
    {
      title: "Justice League Dark: Apokolips War",
      ReleaseDate: 2020,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 7.7,
      Duration: "1h 30m"
    }
  ];
}

class Movie {
  title!: string;
  ReleaseDate!: number;
  Genre!: string;
  Rating!: number;
  Duration!: string;
}
