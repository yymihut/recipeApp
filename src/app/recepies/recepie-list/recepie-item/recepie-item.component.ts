import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {
  @Input() reteta: Recipe = new Recipe('', '', '', []);

  constructor(private recipeServ: RecipeService) {}

  ngOnInit(): void {}

  onSelectedRecepieItem() {
    this.recipeServ.recipeSelected.emit(this.reteta);
  }
}
