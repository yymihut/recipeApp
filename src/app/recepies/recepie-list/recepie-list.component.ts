import { Component, OnInit, EventEmitter ,Output} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeServ: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeServ.getRecipes();
   }
}
