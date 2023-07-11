import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

    characters_info = [
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth",
        "location": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Citadel of Ricks",
        "location": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      },
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Dead",
        "species": "Human",
        "gender": "Female",
        "origin": "Earth (Replacement Dimension)",
        "location": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
      },
      {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth (Replacement Dimension)",
        "location": "Earth",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      },
      {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "gender": "Female",
        "origin": "Abadango",
        "location": "Abadango",
        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
      },
      {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth (Replacement Dimension)",
        "location": "Testicle Monster Dimension",
        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
      },
      {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown",
        "location": "Citadel of Ricks",
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
      }
    ];

    seeDetails(idCharacter: number){

      
    }
}
