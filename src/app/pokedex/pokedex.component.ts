import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemonList: any;
  randomPokemon: any;

  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
      )
      .subscribe((res) => {
        this.pokemonList = res;
        this.pokemonList = this.pokemonList.splice(0, 150);
      });
  }

  ngOnInit(): void {}

  getRandomPokemon() {
    // const randomPokemon = Math.floor(Math.random() * 151);
    // this.randomPokemon = this.pokemonList[randomPokemon];

    this.randomPokemon =
      this.pokemonList[Math.floor(Math.random() * this.pokemonList.length)];
  }

  getColor(type: string) {
    switch (type) {
      case 'Fire':
        return 'warn';
      case 'Poison':
        return 'primary';
      case 'Grass':
        return 'accent';
      case 'Electric':
        return 'warn';
      case 'Ground':
        return 'primary';
      case 'Flying':
        return 'accent';
      default:
        return '';
    }
  }
}
