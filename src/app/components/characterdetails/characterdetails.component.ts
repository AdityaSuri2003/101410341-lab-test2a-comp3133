import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.scss']
})
export class CharacterdetailsComponent implements OnInit {
  character?: Character;

  constructor(private route: ActivatedRoute, private hpService: HpService) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    if (name) {
      this.hpService.getAllCharacters().subscribe(characters => {
        this.character = characters.find(c => c.name === decodeURIComponent(name));
      });
    }
  }
}
