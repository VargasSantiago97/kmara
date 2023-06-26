import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var vars: any;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    API_URI = vars.API_URI_DATABASE;

    EXISTE_SESION = false;

    formatoColumnas: any = {
        users: ['id', 'alias', 'nombre', 'apellido', 'email', 'contrasena', 'imagen', 'datos', 'estado'],
    }

    constructor(
        private http: HttpClient,
    ) { }

    existeSesion(){
        const session = sessionStorage.getItem('session')
        if(session == 'ok'){
            return true
        }
        return false
    }

    setearSesionOk(){
        sessionStorage.setItem('session', 'ok')
    }

    crearSesion(user:any, pass:any) {
        return this.http.post(`${this.API_URI}/index.php`, { autorizar: { user: user, pass: pass } });
    }
}



