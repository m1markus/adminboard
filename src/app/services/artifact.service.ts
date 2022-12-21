import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artifact } from 'src/app/shared/artifact'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtifactService {

  private urlLocal = "http://localhost:3000/artifacs";
  private urlProd = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getArtifacts(): Observable<Artifact[]> {
    let url = this.urlLocal;
    return this.http.get<Artifact[]>(url, this.httpOptions);
  }
}
