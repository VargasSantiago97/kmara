import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var vars: any;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    API_URI = vars.API_URI_DATABASE;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    verificarSesion(){
        console.log('sss')
        if(!this.existeSesion()){
            this.router.navigate(['/auth/login']);
        }
    }
    existeSesion(){
        const session = sessionStorage.getItem('session')
        if(session == 'ok'){
            return true
        }
        return false
    }

    setearSesionOk(token:any){
        sessionStorage.setItem('session', 'ok')
        sessionStorage.setItem('token', token)
        this.router.navigate(['/']);
    }
    cerrarSesion(){
        sessionStorage.clear()
        this.router.navigate(['/auth/login']);
    }

    crearSesion(user:any, pass:any) {
        return this.http.post(`${this.API_URI}/index.php`, { autorizar: { user: user, pass: pass } });
    }
    codificarPassword(pass:any) {
        return this.http.get(`${this.API_URI}/index.php?pass=${pass}`);
    }

}



