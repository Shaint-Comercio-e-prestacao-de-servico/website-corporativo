import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://backend-email-j1l1lwund-titoosrars-projects.vercel.app/api/contact';

  constructor(private http: HttpClient) {}

  sendContact(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
