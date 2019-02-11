import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableService {
    CourseService(): any[]{
        throw new Error("Method not implemented.");
    }
    constructor() { }

    getKarina(){
        return[
            {id: 0, hobby:"Menonton film", ket:"menonton film disaat waktu senggang"},
            {id: 1, hobby:"Jalan-Jalan", ket:"ketika bosan dan ada waktu luang"},
            {id: 2, hobby:"Membaca", ket:"Membaca apapun"}
        ]
    }
}