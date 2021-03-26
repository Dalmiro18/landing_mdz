import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promotion } from '../models/promotion'

@Injectable({
    providedIn: 'root'
})

export class Promotions{

    selectedPromotion: Promotion;
    promotion: Promotion[];
    readonly URL_API = 'http://localhost:3000/api/promotions';

    constructor(private http: HttpClient){
        this.selectedPromotion = new Promotion();
    }

    sendPromotion(promotion: Promotion){
        console.log(this.http.post(this.URL_API, promotion))
        return this.http.post(this.URL_API, promotion)
    }

}