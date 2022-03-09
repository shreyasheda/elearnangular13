import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recip-detail',
  templateUrl: './recip-detail.component.html',
  styleUrls: ['./recip-detail.component.css']
})
export class RecipDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
