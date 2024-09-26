import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // private apiUrl = 'https://nokiabackend-9ef810487361.herokuapp.com/fetchData'; // Replace with API URL

  // constructor(private http: HttpClient) { }

  // getData(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}`); // Adjust endpoint as needed
  // }
}
