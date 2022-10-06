import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../Objets/User";

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  apiURL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {}

    public getUsers() {
      return this.httpClient.get<User[]>(`${this.apiURL}`);
    };
}
