import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../../shared/api/model/animal';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.scss'],
})
export class AnimalItemComponent implements OnInit {
  @Input() model: Animal;
  @Output() delete: EventEmitter<Animal>;

  constructor() {
    this.delete = new EventEmitter<Animal>();
  }

  ngOnInit(): void {}

  onItemDelete(): void {
    this.delete.emit(this.model);
  }
}
