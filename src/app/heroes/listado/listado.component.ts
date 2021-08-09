import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ["goku", "lel", "perromon"]

  borrar(id: number): void {
    this.heroes.splice(id,1);
  }

}
