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
        this.cs.getDB('users').subscribe(
            (res:any) => {
                if(res.ok){
                    res.data.forEach((e:any) => {
                        if(e.datos){
                            if(JSON.parse(e.datos)){
                                e.datos = JSON.parse(e.datos)
                            }
                        }
                    });
                    console.log(res)
                } else {
                    console.error(res.mensaje)
                }

            },
            (err:any) => {
                console.error(err)
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
            datos: '{}',
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
