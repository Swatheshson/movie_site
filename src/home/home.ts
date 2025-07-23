import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected title = 'stand-web';

  movies: Movie[] = [
    {
      title: "Justice League: The Flashpoint Paradox",
      ReleaseDate: 2013,
      Genre: "Animation, Action, Adventure",
      Rating: 7.9,
      Duration: "1h 15m",
      selected: false // <-- added
    },
    {
      title: "Justice League: War",
      ReleaseDate: 2014,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.2,
      Duration: "1h 19m",
      selected: false
    },
    {
      title: "Son of Batman",
      ReleaseDate: 2014,
      Genre: "Animation, Action, Adventure",
      Rating: 6.7,
      Duration: "1h 14m",
      selected: false
    },
    {
      title: "Justice League: Throne of Atlantis",
      ReleaseDate: 2015,
      Genre: "Animation, Action, Adventure",
      Rating: 6.7,
      Duration: "1h 12m",
      selected: false
    },
    {
      title: "Batman vs. Robin",
      ReleaseDate: 2015,
      Genre: "Animation, Action, Adventure",
      Rating: 7.0,
      Duration: "1h 20m",
      selected: false
    },
    {
      title: "Batman: Bad Blood",
      ReleaseDate: 2016,
      Genre: "Animation, Action, Adventure",
      Rating: 6.8,
      Duration: "1h 12m",
      selected: false
    },
    {
      title: "Justice League vs. Teen Titans",
      ReleaseDate: 2016,
      Genre: "Animation, Action, Adventure",
      Rating: 6.9,
      Duration: "1h 18m",
      selected: false
    },
    {
      title: "Justice League Dark",
      ReleaseDate: 2017,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.0,
      Duration: "1h 15m",
      selected: false
    },
    {
      title: "Teen Titans: The Judas Contract",
      ReleaseDate: 2017,
      Genre: "Animation, Action, Adventure",
      Rating: 7.0,
      Duration: "1h 24m",
      selected: false
    },
    {
      title: "Suicide Squad: Hell to Pay",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.0,
      Duration: "1h 26m",
      selected: false
    },
    {
      title: "The Death of Superman",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 7.3,
      Duration: "1h 21m",
      selected: false
    },
    {
      title: "Constantine: City of Demons",
      ReleaseDate: 2018,
      Genre: "Animation, Action, Fantasy",
      Rating: 7.4,
      Duration: "1h 30m",
      selected: false
    },
    {
      title: "Reign of the Supermen",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 6.8,
      Duration: "1h 27m",
      selected: false
    },
    {
      title: "Batman: Hush",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Adventure",
      Rating: 6.9,
      Duration: "1h 21m",
      selected: false
    },
    {
      title: "Wonder Woman: Bloodlines",
      ReleaseDate: 2019,
      Genre: "Animation, Action, Fantasy",
      Rating: 5.9,
      Duration: "1h 23m",
      selected: false
    },
    {
      title: "Justice League Dark: Apokolips War",
      ReleaseDate: 2020,
      Genre: "Animation, Action, Sci-Fi",
      Rating: 7.7,
      Duration: "1h 30m",
      selected: false
    }
  ];





  logSelectedMovies() {
    const selectedMovies = this.movies.filter(mov => mov.selected);
    console.log('Selected Movies:', selectedMovies);
   // alert(`You have selected ${selectedMovies.length} movie(s)` + 'but you still have to watch ' + (this.movies.length - selectedMovies.length ) + ' remaining movies to earn the badge for DC animated movies');
    if(this.movies.length - selectedMovies.length === 0)
    { 
      this.earnBadge();
    }
    else{
      alert(`You have selected ${selectedMovies.length} movie(s)` + 'but you still have to watch ' + (this.movies.length - selectedMovies.length ) + ' remaining movies to earn the badge for DC animated movies');
    }
  }

  earnBadge() {
    // ✅ Place your function body here
    alert("🎉 Congratulations! You have earned the DC Animated Movies badge!");
    console.log("Badge earned: DC Animated Movies badge awarded.");
  }
}



function earnBadge() {
  throw new Error('Function not implemented.');
}

class Movie {
  title!: string;
  ReleaseDate!: number;
  Genre!: string;
  Rating!: number;
  Duration!: string;
  selected: boolean = false; // <-- added to track checkbox state
}



