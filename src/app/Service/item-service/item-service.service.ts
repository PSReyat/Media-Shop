import { Item } from './../../Model/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private shopUrl: string;

  constructor(private http: HttpClient) { 
    this.shopUrl = "http://localhost:8080/";
  }

  public findAll(): Observable<Item[]>{
    return this.http.get<Item[]>(this.shopUrl);
  }
}
