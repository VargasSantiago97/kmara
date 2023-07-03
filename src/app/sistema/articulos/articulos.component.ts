import { Component } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-articulos',
    templateUrl: './articulos.component.html',
    styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {

    selectedRubro: any = ''
    selectedSubRubro: any = ''
    selectedArticulo: any = ''

    subrubros: any = [];


    db_campos:any = []


    displayRubro: any = false
    displaySubRubro: any = false
    displayArticulo: any = false

    db:any = [];

    constructor(
        private cs: ComunicacionService,
        private auth: AuthService
    ){}

    ngOnInit(){

        this.cs.getDB('rubros', this.db)
        this.cs.getDB('subrubros', this.db)

        setTimeout(() => {
            console.log(this.db)
        }, 1000)
    }
    actualizarSubRubros(){
        this.subrubros = this.db['subrubros'].filter((e:any) => { return e.id_rubro == this.selectedRubro })
    }


    VER(){
        var data:any = {}
        this.cs.getDB('users', data, () => { console.log(data) })
    }
    CREAR(){
        var data:any = {
            id: 'D1D1D1D1D1D1',
            alias: 'MAIZ',
            color: '#F7FF00',
            datos: '{}',
            estado: 1,
        }

        this.cs.createDB('subrubros', data, () => { console.log(data) } )
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



    crearTabla(){
        var consulta = 'CREATE TABLE `moliendas`.`subrubros` ( `id` VARCHAR(12) NOT NULL , `alias` VARCHAR(100) NOT NULL , `color` VARCHAR(30) NOT NULL , `datos` TEXT NOT NULL , `estado` INT NOT NULL ) ENGINE = InnoDB'
        this.cs.dbConsulta(consulta).subscribe(
            (res:any) => {
                console.log(res)
            },
            (err:any) => {
                console.error(err)
            }
        )
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
