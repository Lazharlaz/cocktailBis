import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../../models/Cocktail.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css'
})
export class CocktailComponent {
  private cocktailService = inject(CocktailService);
constructor(){}

cocktailList:Cocktail[]=this.cocktailService.getCocktails()



}
