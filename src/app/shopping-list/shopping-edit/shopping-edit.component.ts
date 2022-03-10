import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amountInputRef.nativeElement.value
    const newIngredeient = new Ingredients(ingName,ingAmt)
    this.ingredientAdded.emit(newIngredeient)
  }
}
