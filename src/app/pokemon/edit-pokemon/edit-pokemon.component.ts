import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2>Éditer {{ pokemon?.name }}</h2>
    <img *ngIf="pokemon" src="{{ pokemon.picture }}" >
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }else {
      this.pokemon = undefined;
    }
  }

}
