import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recip-detail',
  templateUrl: './recip-detail.component.html',
  styleUrls: ['./recip-detail.component.css']
})
export class RecipDetailComponent implements OnInit {
  // @Input() recipe!: Recipe;
  recipe!: Recipe;
  id!: number;
  constructor(private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  onAddShopping(){
    this.recipeService.addIngToShopping(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  }
}
