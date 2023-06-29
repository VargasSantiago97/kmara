import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private layoutService: LayoutService,
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'overlay',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'mdc-light-indigo',         //default component theme for PrimeNG
            scale: 12                           //size of the body font size to scale the whole application
        };

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event['url'] != '/auth/login') {
                    this.auth.verificarSesion();
                }
            }
        });
    }

}
