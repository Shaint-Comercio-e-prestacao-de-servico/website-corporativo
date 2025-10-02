import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/app/resources/environment/environment.prod';
export interface ContactForm {
  nome: string;
  email: string;
  empresa: string;
  servico: string;
  termos: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Backend local para dev, Vercel para produção
  private baseUrl = environment.apiUrl;
  // Para produção, basta alterar para:
  // private baseUrl = 'https://backend-email-j1l1lwund-titoosrars-projects.vercel.app/api/contact';

  constructor(private http: HttpClient) { }

  sendContactForm(data: ContactForm): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro no envio do formulário', error);
    return throwError(() => new Error(error.message || 'Erro desconhecido'));
  }
}
