import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import dataLeagues from '../app/MockDataLeagues.json';
import dataTeams from '../app/MockDataTeams.json';

const URLLEAGUES = 'https://v3.football.api-sports.io/leagues?last=5';
const URLTEAMS = 'https://v3.football.api-sports.io/teams';

const headers = {
  headers: {
    'x-apisports-key': '82f444eb0bf369e5ed4180d8d0ab0eff',
  },
};
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getLeagues(): Observable<any> {
    return this.http.get<any>(URLLEAGUES, headers);
  }
  getMockedLeagues(): any {
    return dataLeagues;
  }

  getMockedTeams(): any {
    return dataTeams;
  }

  getTeams(league: number, season: number): Observable<any> {
    return this.http.get<any>(URLTEAMS, {
      headers: {
        'x-apisports-key': '82f444eb0bf369e5ed4180d8d0ab0eff',
      },
      params: {
        season: season,
        league: league,
      },
    });
  }
}
