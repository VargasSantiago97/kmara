import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private auth: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.primengConfig.ripple = true;

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if(event['url'] != '/auth/login'){
                    this.auth.verificarSesion();
                }
            }
        });
    }

}
