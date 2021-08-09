import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: ''
  }

  @Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

  agregar(){
    if( this.nuevo.nombre.trim().length === 0){ return; }
    
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo)
    
    this.nuevo = {
      nombre: '',
      poder: ''
    }
  }
}
