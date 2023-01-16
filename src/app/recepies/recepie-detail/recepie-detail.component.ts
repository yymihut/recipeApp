import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css'],
})
export class RecepieDetailComponent {
  @Input() dinRecipies: Recipe;

  constructor(private recipeServ: RecipeService) {}

  onAddToShopingList() {
    this.recipeServ.addIngredientsToShopingList(this.dinRecipies.ingredients);
  }
}
