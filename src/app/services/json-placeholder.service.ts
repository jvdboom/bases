import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class JsonPlaceholderService {

  private baseUrl: string = `https://jsonplaceholder.typicode.com/`;

  constructor(private http: HttpClient) { }

}
