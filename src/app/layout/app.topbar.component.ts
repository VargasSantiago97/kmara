import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    
    overlayVisible: boolean = false
    itemsUser: any = [
        {
            label: this.nombreUsuario(),
            items: [
                {
                    label: 'Cerrar Sesión',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        this.auth.cerrarSesion();
                    }
                },
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'Angular',
                    icon: 'pi pi-external-link',
                    url: 'http://angular.io'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    routerLink: '/fileupload'
                }
            ]
        }
    ];

    constructor(
        public layoutService: LayoutService,
        private auth: AuthService
    ) { }

    nombreUsuario(){
        var nombre: any = ''
        var token:any = sessionStorage.getItem('token');
        var texto = token.split('.');
        if(texto[0]){
            var data = JSON.parse(atob(texto[0]))
            nombre = data['apellido'] + ', ' + data['nombre']
        }
        return nombre
    }
}
