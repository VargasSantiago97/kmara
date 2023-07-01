import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {

    @Input() cols: any;
    @Input() datos: any;
    @Input() titulo: any;
    @Input() totales: any = false;
    @Input() botones: any;

    @Output() seleccionado = new EventEmitter<string>();
    @Output() boton = new EventEmitter<string>();

    selectedColumns: any = []
    selectedTabla: any = []

    selectedProduct: any;

    items: any;

    ngOnInit() {
        this.selectedColumns = this.cols
        this.items = [
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Mostrar vars', command: this.mostrarDatos },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            }
        ];
    }


    dblClick(dato: any) {
        this.seleccionado.emit(dato);
    }

    button(e: any) {
        this.seleccionado.emit(e);
    }

    mostrarDatos(){
        console.log(this.selectedProduct)
    }

}

