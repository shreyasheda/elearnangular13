import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredients[];
  private igChangeSub!: Subscription;

  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
  this.ingredients = this.slService.getIngredients()
  this.igChangeSub = this.slService.ingredientChange.subscribe((ingg: Ingredients[]) => {
      this.ingredients = ingg;
    })
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }
}
