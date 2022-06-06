import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Leitor } from "../Models/leitor";

@Injectable({
    providedIn: 'root',
})

export class LeitorService{

 api: string = environment.api;

 constructor(private http: HttpReader) {}

 public Obtertodos(): Observable<Leitor[]> 
 {
     return this.http.get<Leitor[]>(this.api + 'leitores');
 }

 public ObterPorId(id: Number): Observable<Leitor[]> 
 {
    return this.http.post<Leitor[]>(this.api + 'leitores' + id);
 }


 public Adicionar(leitor:Leitor): Observable<number[]> 
 {
    return this.http.post<Leitor[]>(this.api + 'leitores' + leitor);
 }

 public Editar(id: Number, leitor:Leitor): Observable<number[]> 
 {
    return this.http.post<Leitor[]>(this.api + 'leitores' + id, leitor);
 }

 public Deletar(id:number): Observable<number[]> 
 {
    return this.http.post<Leitor[]>(this.api + 'leitores' + id);
 }

}