class Team  {
    id:number = -1;
    name?:string;
    type?:string;
    logo?:string;
    
    constructor(team:any){
        this.id = team.id;
        this.name = team.name;
        this.type = team.type;
        this.logo = team.logo;
    }
}


export default Team;