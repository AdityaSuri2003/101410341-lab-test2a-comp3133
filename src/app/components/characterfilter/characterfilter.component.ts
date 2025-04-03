import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.scss']
})
export class CharacterfilterComponent {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  @Output() houseSelected = new EventEmitter<string>();

  onHouseChange(event: string) {
    this.houseSelected.emit(event);
  }
}
