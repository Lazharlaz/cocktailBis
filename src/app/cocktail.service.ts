import { Injectable } from '@angular/core';
import { Cocktail } from '../models/Cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
cocktailListService:Cocktail[] = [
  new Cocktail('Mojito', 8.5, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Mojito_1ou2cocktails_cre%CC%81dit.KP_H.jpg'),
  new Cocktail('Manhattan', 9.0, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Manhattan_KP_06262019_2838-copie.jpg'),
  new Cocktail('Margarita', 10.0, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Margarita_1ou2cocktails_cre%CC%81dit.KP_H.jpg'),
  new Cocktail('Whisky Sour', 11.0, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Whisky_Sour_1ou2Cocktails_KP_06262019_2939-copie.jpg'),
  new Cocktail('Daiquiri', 8.0, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Daiquiri_1ou2cocktails_cre%CC%81dit.KP_H.jpg'),
  new Cocktail('Bloody Mary', 9.5, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Bloody_Mary_1ou2cocktails_cre%CC%81dit.KP_.jpg'),
  new Cocktail('Pisco Sour', 8.5, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Pisco_Sour_1ou2cocktails_KP_06262019_2971-copie.jpg'),
  new Cocktail('Mai Tai', 10.5, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_classique_Mai_Tai_1ou2cocktails_KP_06262019_2546-copie.jpg'),
  new Cocktail('Old Fashioned', 12.0, 'https://1ou2cocktails.com/wp-content/uploads/2015/03/Cocktail_Old_Fashioned_classique_1ou2Cocktails_kp_1OU2COCKTAILS_012120216571_lr.jpg'),
  new Cocktail('Negroni', 11.5, 'https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Mojito_1ou2cocktails_cre%CC%81dit.KP_H-1.jpg')
];
  constructor() { 

  }
  getCocktails(): Cocktail[] {
    return this.cocktailListService;
  }
}
