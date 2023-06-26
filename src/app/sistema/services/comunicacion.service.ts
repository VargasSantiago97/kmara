import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var vars: any;

@Injectable({
    providedIn: 'root'
})
export class ComunicacionService {

    API_URI = vars.API_URI_DATABASE;

    formatoColumnas: any = {
        users: ['id', 'alias', 'nombre', 'apellido', 'email', 'contrasena', 'imagen', 'datos', 'estado'],
    }
    constructor(
        private http: HttpClient,
    ) { }

    //Consultas a DB
    getDB(tabla: any) {
        var sent = 'SELECT * FROM ' + tabla 
        return this.http.post(`${this.API_URI}/index.php`, { sentencia: sent, token: this.getToken() });
    }
    createDB(tabla: any, data: any) {
        var sent = 'INSERT INTO ' + tabla + ' ('
        sent += this.formatoColumnas[tabla].join(', ')
        sent += ') VALUES ("'

        this.formatoColumnas[tabla].forEach((e: any) => {
            const sumar = data[e] ? (data[e].toString() ? data[e].toString() : '') : ''
            sent += sumar
            sent += '", "'
        });

        sent = sent.slice(0, -3) + ')'

        return this.http.post(`${this.API_URI}/index.php`, { sentencia: sent, token: this.getToken() });
    }
    updateDB(tabla: any, data: any) {
        var sent = 'UPDATE ' + tabla + ' SET '

        for (let i = 0; i < this.formatoColumnas[tabla].length; i++) {
            const agregar = this.formatoColumnas[tabla][i] + ' = "' + data[this.formatoColumnas[tabla][i]] + '", '
            sent += agregar
        }

        sent = sent.slice(0, -2)
        sent += ' WHERE id = "' + data.id + '"'

        return this.http.post(`${this.API_URI}/index.php`, { sentencia: sent, token: this.getToken() });
    }
    deleteDB(tabla: any, idd: any) {
        const sent = 'DELETE FROM ' + tabla + ' WHERE id = "' + idd + '"'
        return this.http.post(`${this.API_URI}/index.php`, { sentencia: sent, token: this.getToken() });
    }

    getToken(){
        var token = sessionStorage.getItem('token')
        return token
    }

    autorizar(user:any, pass: any){
        return this.http.post(`${this.API_URI}/index.php`, { autorizar: { user: user, pass: pass } });
    }

}