import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  ingredients: Ingredient[];

  constructor(private shopService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shopService.getIngredients();
    //daca facem cu slice la getIngredients() tb sa informam despre schimbare si aici:
    this.shopService.ingredientsChaged.subscribe((ingr: Ingredient[]) => {
      this.ingredients = ingr;
    });

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
