import { Component } from '@angular/core'

@Component({
    selector:'app-contador',
    template: `

        <div>
            <h1>{{titulo}}</h1>
        </div>
    
    `
})
export class ContadorComponent {
    titulo: string = 'lel';
    numero = 29;

    acumular( numberx: number ){
        this.numero += numberx;
    }
}
