import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'),
    new Recipe('Pizza', 'Pizza Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg'),
    new Recipe('Sandwich', 'Sandwich Recipe description', 'https://thumbs.dreamstime.com/z/top-view-photo-di-cut-clipping-path-white-background-dish-thai-food-called-rice-mixed-shrimp-paste-recipes-140945833.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
