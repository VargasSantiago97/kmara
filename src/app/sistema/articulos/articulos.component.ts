import { Component } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-articulos',
    templateUrl: './articulos.component.html',
    styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {

    rubros: any = []
    selectedRubro: any = ''

    pass:any = ''

    constructor(
        private cs: ComunicacionService,
        private auth: AuthService
    ){}

    ngOnInit(){
        this.rubros = [
            { alias: 'SEMILLAS', id: 'sem'},
            { alias: 'FERTILIZANTE', id: 'fer'},
        ]
    }


    VER(){
        var data:any = {}
        this.cs.getDB('users', data, () => { console.log(data) })
    }
    CREAR(){
        var data:any = {
            id: 1,
            alias: 'Santy',
            nombre: 'Santiago',
            apellido: 'Vargas',
            email: 'oficina.sociedad.ny@gmail.com',
            contrasena: '54b7b66470bcfaf011f10aaad6b4796a1c606f1421032faa40452dd530dc845b',
            imagen: '',
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


    solicitarPass(){
        this.auth.codificarPassword(this.pass).subscribe(
            (res:any) => {
                if(res.ok){
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

    crearTabla(){

        //CREATE TABLE `moliendas`.`rubros` ( `id` VARCHAR(12) NOT NULL , `alias` INT NOT NULL , `color` INT NOT NULL , `datos` TEXT NOT NULL , `estado` INT NOT NULL ) ENGINE = InnoDB;
    }
/* 
    "id": 2490,
    "cod_articulo": 4,
    "descripcion": "DM GARRA (63i64)  ipro sts",
    "uni_medida": "KG",
    "cod_rubro": 1,
    "cod_subrubro": 1,
    "precio_compra": null,
    "stock_minimo": null,
    "stock_maximo": null,
    "cod_fabricante": null,
    "cod_proveedor": null,
    "porcentaje_precio": null,
    "precio_venta": null,
    "cod_barra": null,
    "tipo_cod_barra": null,
    "reposicion": null,
    "iva": null,
    "coeficiente": null,
    "unidad_venta": null,
    "venta_minima": null,
    "cod_cuenta": null,
    "moneda": null,
    "precio_compra_dolar": null,
    "precio_venta_dolar": null,
    "memo": null,
    "tipo_movimiento": null,
    "nombre_aux1": null,
    "cod_aux1": null,
    "desc_aux1": null,
    "nombre_aux2": null,
    "cod_aux2": null,
    "desc_aux2": null,
    "nombre_aux3": null,
    "cod_aux3": null,
    "desc_aux3": null,
    "nombre_aux4": null,
    "cod_aux4": null,
    "desc_aux4": null,
    "cod_cuenta_venta": null,
    "cruza_remitos": null,
    "afip_unimed": null,
    "ubicacion": null,
    "porcent_comision": null,
    "existencia": null,
    "compra_stock": null,
    "consumo_labores": null,
    "consumo_plantacion": null,
    "consumo_maquinaria": null,
    "tag": null,
    "importe": null,
    "certificado": null,
    "carencia": null,
    "precio_gestion": null,
    "precio_planeamiento": null,
    "principio_activo": null,
    "concentracion": null,
    "cod_fabrica": null,
    "categoria": null,
    "precio_gestion_dolar": 0.00000,
    "cotizacion": 0.00000,
    "porc_materia_seca": null,
    "unidad_medida_id": null,
    "codigo_externo": null,
    "cod_externo": null,
    "movimiento_origen_id": 1,
    "trazabilidad": null,
    "trazabilidad_gtin": null,
    "contenedor_id": null,
    "contenedor_cant": null,
    "id_color_etiqueta_banda": null,
    "nro_senasa": null */

}
