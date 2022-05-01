import { Injectable } from '@angular/core';

// Para trabajar con FireStrore
import { AngularFirestore } from '@angular/fire/compat/firestore';

// Model
import { Player } from '../models/player.model'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private angularFirestore: AngularFirestore) { }

  // Obtener todos los jugadores
  getPlayers(){
    return this.angularFirestore
      .collection("squad")
      .snapshotChanges()
  }

  // obtener los jugadores por id
  getPlayersById(id){
    return this.angularFirestore
    .collection("squad")
    .doc(id)
    .valueChanges()
  }

  // Crear un nuevo jugador
  createPlayer(player: Player){
    return new Promise<any> ( ( resolve, reject ) => {
      this.angularFirestore
      .collection("squad")
      .add(player)
      .then( (response) => {
        console.log(response);
      },
      (error) => {
        reject(error)
      });
    });
  }

  // Editar un jugador
  updatePlayer(player: Player, id){
    return this.angularFirestore
    .collection("squad")
    .doc(id)
    .update({
      name: player.name,
      surname: player.surname,
      age: player.age,
      position: player.position,
      assists: player.assists,
      goals: player.goals,
      matchs:player.matchs
    });
  }

  // Eliminar un jugador
  deletePlayer(player){
    return this.angularFirestore
    .collection("squad")
    .doc(player.id)
    .delete();
  }
}
