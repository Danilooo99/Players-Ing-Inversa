import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.model'

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.scss']
})
export class ListPlayerComponent implements OnInit {

  dataSend: string = "Añadir integrante"; 
  Players: Player[];

  constructor(private playerService: PlayersService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe( (res) => {
      this.Players = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Player)
        }
      });
    });
    
  }

  deleteCard = (player) => this.playerService.deletePlayer(player);

}
