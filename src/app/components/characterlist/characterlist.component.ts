import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, CharacterfilterComponent],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HpService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters() {
    this.hpService.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  filterByHouse(house: string) {
    if (!house) {
      this.loadAllCharacters();
      return;
    }

    this.hpService.getCharactersByHouse(house).subscribe(data => {
      this.characters = data;
    });
  }
}
