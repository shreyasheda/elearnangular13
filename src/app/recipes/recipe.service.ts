import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.modal";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'
    , [
      new Ingredients('Test',1)
    ]),
    new Recipe('Pizza', 'Pizza Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'
    ,[
      new Ingredients('Pizza Base',1),
      new Ingredients('Chesse',6),
      new Ingredients('Olives',4)
    ]),
    new Recipe('Sandwich', 'Sandwich Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'
    , [
      new Ingredients('Bread',6),
      new Ingredients('Butter',2)
    ]),
    new Recipe('Burger', 'Burger Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'
    , [
      new Ingredients('Puffed Bun',2)
    ])
  ];

  constructor(private slService : ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShopping(ing: Ingredients[]){
    this.slService.addIngShoping(ing);
  }

}
