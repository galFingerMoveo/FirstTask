import { Component, Input, OnInit } from '@angular/core';
import FootBallLeague from 'src/app/Models/FootBallLeague';
import Team from 'src/app/Models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  @Input() teams: Team[] = new Array<Team>();
  @Input() currentLeague?: FootBallLeague;

  displayedColumns: string[] = ['id', 'name', 'logo'];
  constructor() {}

  ngOnInit(): void {
    console.log(this.teams);
    console.log(this.currentLeague);
  }
}
