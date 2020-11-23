import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  user: User[];
  readonly URL_API = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUser(){
    return this.http.get(this.URL_API);
  }

  postUser(user: User){
    this.http.post(this.URL_API, user );
  }

  deleteUser(_id:string){
    this.http.delete(this.URL_API + `/${_id}`);
  }

}
