import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
  ingredientChange = new EventEmitter<Ingredients[]>();
  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 50),
    new Ingredients('Tomatoes', 45)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient)
    this.ingredientChange.emit(this.ingredients.slice())
  }

  addIngShoping(ing: Ingredients[]){
    this.ingredients.push(...ing);
    this.ingredientChange.emit(this.ingredients.slice())
  }

}
