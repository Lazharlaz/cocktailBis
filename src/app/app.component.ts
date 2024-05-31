import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cocktail } from '../models/Cocktail.model';
import { CocktailComponent } from './cocktail/cocktail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CocktailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail';
}
