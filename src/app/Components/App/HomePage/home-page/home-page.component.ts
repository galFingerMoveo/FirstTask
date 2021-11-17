import { Component, OnInit } from '@angular/core';
import FootBallLeague from 'src/app/Models/FootBallLeague';
import Team from 'src/app/Models/Team';
import { HttpService } from 'src/Services/http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  leagues: FootBallLeague[] = new Array<FootBallLeague>();
  teams: Team[] = new Array<Team>();
  currentLeague?: FootBallLeague;

  constructor(private httpService: HttpService) {}

  // ngOnInit(): void {
  //   this.httpService.getLeagues().subscribe((data) => {
  //     for (let index = 0; index < data.response.length; index++) {
  //       const team = data.response[index];
  //       this.leagues.push(new FootBallLeague(team));
  //     }
  //   });
  // }

  // ChangeLeague(league: FootBallLeague) {
  //   this.currentLeague = league;
  //   var year = league.seasons[league.seasons.length - 1].year;
  //   this.teams = new Array<Team>();
  //   this.httpService
  //     .getTeams(league.league.id, year ? year : -1)
  //     .subscribe((res) => {
  //       console.log(res);
  //       for (let index = 0; index < res.response.length; index++) {
  //         const team = res.response[index].team;g
  //         this.teams.push(new Team(team));
  //       }
  //     });
  // }

  ngOnInit(): void {
    var mockLeagues = this.httpService.getMockedLeagues();
    for (let index = 0; index < mockLeagues.FootBallLeagues.length; index++) {
      const team = mockLeagues.FootBallLeagues[index];
      this.leagues.push(new FootBallLeague(team));
    }
  }

  ChangeLeague(league: FootBallLeague) {
    var mockTeams = this.httpService.getMockedTeams();
    this.currentLeague = league;
    this.teams = new Array<Team>();
    for (let index = 0; index < mockTeams.FootBallTeams.length; index++) {
      const team = mockTeams.FootBallTeams[index].team;
      this.teams.push(new Team(team));
    }
    console.log(this.teams);
  }
}
