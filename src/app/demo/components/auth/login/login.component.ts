import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {


    user:any = ''
    password:any = ''

    constructor(
        public layoutService: LayoutService,
        private auth: AuthService,
        private messageService: MessageService
    ) { }

    iniciarSesion(){
        this.auth.crearSesion(this.user, this.password).subscribe(
            (res:any) => {
                if(res.ok){
                    this.auth.setearSesionOk(res.data)
                } else {
                    this.messageService.add({ severity: 'error', summary: 'Error!', detail: res.mensaje })
                    console.log(res)
                }
            },
            (err:any) => {
                this.messageService.add({ severity: 'error', summary: 'Error conectando a backend!', detail: err })
            }
        );
    }
}
