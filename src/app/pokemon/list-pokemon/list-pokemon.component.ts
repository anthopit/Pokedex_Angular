import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = this.pokemonService.getPokemonList();
  pokemonSelected: Pokemon|undefined;

  constructor(private router: Router,
              private pokemonService: PokemonService) { }

  ngOnInit(){
    console.table(this.pokemonList);
  }

  // Avec objet Event
  // selectPokemon(event : MouseEvent){
  //   const  index: number = +(event.target as HTMLInputElement).value;
  //   console.log(`Vous avez cliqué sur le pokémon ${this.pokemonList[index].name}`);
  // }

  selectPokemon(pokemonId: number) {
    const pokemon : Pokemon|undefined = this.pokemonService.getPokemonById(pokemonId);
    if(pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez  demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }

}
