import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

    colsClientes: any = []
    datosClientes: any = []
    botonesClientes: any = []

    constructor() { }

    ngOnInit() {
        this.colsClientes = [
            { field: 'id', header: 'Id', type: 'text'},
            { field: 'alias', header: 'Alias', type: 'text'},
            { field: 'cuit', header: 'C.U.I.T.', type: 'text'},
            { field: 'mod', header: 'MOD.', type: 'input'},
            { field: 'acciones', header: 'Acc.', type: 'button'},
        ]

        this.datosClientes = [
            {
                id: '0',
                alias: 'Santy',
                cuit: '202020202020',

            },
            {
                id: '0',
                alias: 'Santy2',
                cuit: '202020202020',

            },
            {
                id: '0',
                alias: 'Santy3',
                cuit: '202020202020',

            },
            {
                id: '0',
                alias: 'Santy4',
                cuit: '202020202020',

            }
        ]

        this.botonesClientes = [
            {
                id: 'guardar',
                icon: 'pi pi-save',
                background: 'rgba(9, 255, 0, 0.404)',
            },
            {
                id: 'borrar',
                icon: 'pi pi-trash',
                background: 'rgba(212, 30, 30, 0.432)',
            }
        ]
    }

    mostrar(e:any){
        console.log(e)
    }
}
