import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artifact } from 'src/app/shared/artifact'

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

  getArtifacts() {
    let url = this.urlLocal;
    return this.http.get<Artifact[]>(url, this.httpOptions);
  }
}
