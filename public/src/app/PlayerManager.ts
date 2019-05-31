import { SocketService } from './socket.service';


let player_count = 0;
let team_count = 0;



const players: any = [];
const teams: any = [];

export class Team {
    members: Object[];
    health: number = 10;
    missile: number = 2;
    model: any = {};
    drone: any = {};
    team_id: number = 0;
    alive: boolean;
    power: number = 1;

    constructor(members, model?, drone?) {
        const self = this;
        self.health = this.health;
        self.missile = this.missile;
        self.members = members;
        this.alive = true;
        self.team_id = team_count + 1;
        team_count++;

        const team = {
            members: self.members,
            health: self.health,
            missile: self.missile,
            model: self.model,
            drone: self.drone,
            id: self.team_id
        };
        teams.push(team);
        console.log('team from PlayerManager ->', teams);
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
        target.health -= 3;
        this.missile -= 1;
        return this;
    }

    shootLaser(target: Team) {
        target.health -= this.power;
        return this;
    }


    resetTeam() {
        this.health = 10;
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
        const player = {
            name: self.name,
            role: self.role,
            team: self.team,
            id: self.id,
            socket: '',
            model: ''
        };
        players.push(player);
        console.log('player from PlayerManager ->', players);
    }

}

export function getPlayers() {
    return players;
}

export function getTeams() {
    return teams;
}

export function getTeamById(id) {
    for (let i = 0; i < teams.length;i++) {
        if (teams[i].id === id) {
            return teams[i]
        }
    }
}



export function splitTeams(players) {
    if (players.length < 4) {
        return players;
    }
    const team1 = [];
    const team2 = [];
    for (let i =0; i<players.length; i++){
        if (players[i]['team']===1) {
            team1.push(players[i]);
        } else {
            team2.push(players[i]);
        }
    }
    let teams = {
        1: team1,
        2: team2
    }
    return teams;
}

export function logPlayer(roll, name, team, flag?) {
    return new Player(roll, name, team);
}

