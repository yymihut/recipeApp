import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // daca pastram slice (o copie dupa arayul original) trebuie creeat un eventEmiter

  ingredientsChaged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients.slice(); //daca stergem slice, e ok ,se randeaza arayul original, dar mai sus o solutie cu slice
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    this.ingredientsChaged.emit(this.ingredients.slice());
    console.log('shopinglistservice addIngredient(ingr: Ingredient)' + ingr);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let item of ingredients) {
    //   this.addIngredient(item);
    // }
    // o varianta mai buna:
    this.ingredients.push(...ingredients); // spread operator - trimite o lista dintr-un array, push nu poate trimite []
    this.ingredientsChaged.emit(this.ingredients.slice());
  }
}
