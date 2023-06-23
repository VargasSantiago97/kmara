import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {

    @Input() cols: any;
    @Input() datos: any;
    @Input() totales: any = false;
    @Input() botones: any;

    @Output() seleccionado = new EventEmitter<string>();
    @Output() boton = new EventEmitter<string>();


    dblClick(dato:any) {
        this.seleccionado.emit(dato);
    }

    button(e:any){
        this.seleccionado.emit(e);
    }

}

