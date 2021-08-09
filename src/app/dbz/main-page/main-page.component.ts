import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: '666'
    },
    {
      nombre: 'vegeis',
      poder: '34343'
    }
  ]

  nuevo: Personaje = {
    nombre: 'maestro loo',
    poder:'dfdfd'
  }
  
  agregarNuevoPersonaje(argumento: Personaje){
    console.log(argumento)
  }
}
