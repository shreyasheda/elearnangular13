import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recip-detail',
  templateUrl: './recip-detail.component.html',
  styleUrls: ['./recip-detail.component.css']
})
export class RecipDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onAddShopping(){
    this.recipeService.addIngToShopping(this.recipe.ingredients);
  }

}
