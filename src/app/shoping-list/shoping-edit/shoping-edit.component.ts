import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>(); se poate asa cu object definition sau:
  // cu modelul ingredient.model
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.nameInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingName, ingAmount)

    this.ingredientAdded.emit(newIngredient);
  }

}
