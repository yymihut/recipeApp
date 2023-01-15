import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeServ: RecipeService){}

  ngOnInit(){
    this.recipeServ.recipeSelected.subscribe((rec: Recipe)=>{this.selectedRecipe = rec})

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

}
