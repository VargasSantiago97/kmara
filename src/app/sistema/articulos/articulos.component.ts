import { Component } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';

@Component({
    selector: 'app-articulos',
    templateUrl: './articulos.component.html',
    styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {

    rubros: any = []
    selectedRubro: any = ''

    constructor(
        private cs: ComunicacionService
    ){}

    ngOnInit(){
        this.rubros = [
            { alias: 'SEMILLAS', id: 'sem'},
            { alias: 'FERTILIZANTE', id: 'fer'},
        ]
    }

    solicitarToken(){
        this.cs.autorizar('admin', '123456798').subscribe(
            (res:any) => {
                if(res.ok){
                    console.log(res)
                    sessionStorage.setItem('token', res.data)
                } else {
                    console.error(res.mensaje)
                }
            },
            (err:any) => {
                console.error(err)
            }
        )
    }

    VER(){
        var data:any = {}
        this.cs.getDB('users', data, () => { console.log(data) })
    }

    CREAR(){
        var data:any = {
            id: 1233,
            alias: 'santy',
            nombre: 'santy',
            apellido: 'santy',
            email: 'santy',
            contrasena: 'santy',
            imagen: 'santy',
            datos: '{}',
            estado: 1,
        }

        this.cs.createDB('users', data, () => { console.log(data) } )
    }
    MODIFICAR(){
        var data:any = {
            id: 123,
            alias: 'san',
            nombre: 'san',
            apellido: 'san',
            email: 'san',
            contrasena: 'san',
            imagen: 'san',
            datos: '{}',
            estado: 1,
        }

        this.cs.updateDB('users', data, () => { console.log(data) })
    }
    ELIMINAR(){
        this.cs.deleteDB('users', 1233, () => {
            var data:any = {}
            this.cs.getDB('users', data, () => { console.log(data) })
        })
    }

}
