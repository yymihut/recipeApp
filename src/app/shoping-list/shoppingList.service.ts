import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // daca pastram slice (o copie dupa arayul original) trebuie creeat un eventEmiter

  ingredientsChaged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Rosii', 10),
  ];

  getIngredients() {
    return this.ingredients.slice(); //daca stergem slice, e ok ,se randeaza arayul original, dar mai sus o solutie cu slice
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientsChaged.emit(this.ingredients.slice())
    console.log('shopinglistservice addIngredient(ingr: Ingredient)'+ingr)
  }
}
