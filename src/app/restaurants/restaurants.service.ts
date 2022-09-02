import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/internal/Observable";
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app.error-handler'
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) {}

    getRestaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
        .pipe(catchError(ErrorHandler.handleError))
    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
        .pipe(catchError(ErrorHandler.handleError))
    }

    getReviewsByIdRestaurant(id: string): Observable<any>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}/reviews`)
        .pipe(catchError(ErrorHandler.handleError))
    }

    getMenuByIdRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
        .pipe(catchError(ErrorHandler.handleError))
    }
}