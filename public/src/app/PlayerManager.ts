import { SocketService } from './socket.service';


var player_count = 0;



var players: any = [];



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

