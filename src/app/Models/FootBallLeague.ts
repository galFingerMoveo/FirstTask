import Country from "./Country";
import League from "./League";
import Season from "./Season";

class FootBallLeague  {
    league:League;
    country:Country;
    seasons:Season[];
    constructor(FootBallLeague:any){
        this.country = FootBallLeague.country;
        this.league = FootBallLeague.league;
        this.seasons = FootBallLeague.seasons;
    }
}


export default FootBallLeague;