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

    VER(){
        this.cs.getDB('users').subscribe(
            (res:any) => {
                res.forEach((e:any) => {
                    if(e.datos){
                        e.datos = JSON.parse(e.datos)
                    }
                });
                console.log(res)
            },
            (err:any) => {
                console.log(err)
            }
        )
    }
    CREAR(){
        this.cs.createDB('users', {
            id: 123,
            alias: 'santy',
            nombre: 'santy',
            apellido: 'santy',
            email: 'santy',
            contrasena: 'santy',
            imagen: 'santy',
            datos: 'santy',
            estado: 1,
        }).subscribe(
            (res:any) => {
                console.log(res)
            },
            (err:any) => {
                console.log(err)
            }
        )
    }
    MODIFICAR(){
        this.cs.updateDB('users', {
            id: 123,
            alias: 'santyyyy',
            nombre: 'santyyyy',
            apellido: 'santyyyy',
            email: 'santyyyy',
            contrasena: 'santyyyy',
            imagen: 'santyyyy',
            datos: 'santyyyy',
            estado: 0,
        }).subscribe(
            (res:any) => {
                console.log(res)
            },
            (err:any) => {
                console.log(err)
            }
        )
    }
    ELIMINAR(){
        this.cs.deleteDB('users', 123).subscribe(
            (res:any) => {
                console.log(res)
            },
            (err:any) => {
                console.log(err)
            }
        )
    }

}
