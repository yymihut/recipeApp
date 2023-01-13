import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() reteta: Recipe = new Recipe('', '', '');
  @Output() recipeItemSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectedRecepieItem() {
    this.recipeItemSelected.emit();
  }

}
