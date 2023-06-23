import { Component } from '@angular/core';

@Component({
    selector: 'app-articulos',
    templateUrl: './articulos.component.html',
    styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {

    rubros: any = []
    selectedRubro: any = ''

    ngOnInit(){
        this.rubros = [
            { alias: 'SEMILLAS', id: 'sem'},
            { alias: 'FERTILIZANTE', id: 'fer'},
        ]
    }

}
