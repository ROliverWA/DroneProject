import { SocketService } from './socket.service';


var player_count = 0;
var team_count = 0;



var players: any = [];
var teams: any = [];

export class Team {
    members: Object[];
    health: number = 100;
    missile: number = 2;
    model: any = {};
    drone: any = {};
    team_id: number = 0;
    alive: boolean;
    power: number = 10;

    constructor(members, model?, drone?) {        
        const self = this;
        self.health = this.health;
        self.missile = this.missile;        
        self.members = members;
        this.alive = true;
        self.team_id = team_count + 1;
        team_count++;

        let team = {
            members: self.members,
            health: self.health,
            missile: self.missile,
            model: self.model,
            drone: self.drone,
            id: self.team_id
        }
        teams.push(team);
        console.log(teams);
    }

    takeHit(damage = this.power) {
        this.health -= damage;
        if (this.health <= 0) {
            this.alive = false;
            return this;
        }    
        return;
    }

    shootMissile(target: Team) {
        target.health -= 30;
        this.missile -= 1;
        return this;
    }

    shootLaser(target: Team) {
        target.health -= this.power;
        return this;
    }


    resetTeam() {
        this.health = 100;
        this.missile = 2;
        this.alive = true;
        return this;
    }






}



export class Player {
    role;
    name;
    id;
    socket;
    team;

    constructor(role, name, team, private _socketService?: SocketService) {
        const self = this;
        self.team = team;
        self.role = role;
        self.name = name;
        self.id = player_count + 1;
        player_count ++;
        ;
         let player = {
            name: self.name,
            role: self.role,
            team: self.team,
            id: self.id,
            socket: "",
            model: ""
        }
        players.push(player);
        console.log(players);
    }

}

export function getPlayers() {
    return players;
}

export function splitTeams(players) {
    if (players.length < 4) {
        return players;
    }
    let team1 = [];
    let team2 = [];
    for (let i =0; i<players.length; i++){
        if (players[i]['team']===1) {
            team1.push(players[i])
        }
        else {
            team2.push(players[i])
        }        
    }
    let teams = {
        1: team1,
        2: team2
    }
    return teams;
}

export function logPlayer(roll, name, team, flag?) {
    return new Player(roll,name, team);
}
