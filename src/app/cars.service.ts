import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CarService{
    url = 'http://localhost/';
    
    constructor(private http: HttpClient){}

    recoverAll(){
        return this.http.get(`${this.url}RecoverAll.php`);
    }

    register(car){
        return this.http.post(`${this.url}Register.php`, JSON.stringify(car));
    }

    shutDown(id: number){
        return this.http.get(`${this.url}ShutDown.php?codigo=${id}`);
    }

    select(id: number){
        return this.http.get(`${this.url}Select.php?codigo=${id}`);
    }
    
    modify(car){
        return this.http.post(`${this.url}Modify.php`, JSON.stringify(car));
    }
}