import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Lid } from '../domain/lid.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({  providedIn: 'root' })


export class LedenService {

  private ledenUrl: string = "http://localhost:8082/api/lid";
  selectedLid: Lid = new Lid();

  constructor(    private httpClient: HttpClient  ) { }

    // GET leden
    findAll (): Observable<Lid[]> {
      return this.httpClient.get<Lid[]>(this.ledenUrl)
        .pipe(
          tap(heroes => {
            console.log('fetched leden');
            console.log(heroes);
          }
          ),
          catchError(this.handleError('findAllLeden', []))
        );
    }

     // GET lid by id
   findById(id: number): Observable<Lid> {
    const url = `${this.ledenUrl}/${id}`;
    return this.httpClient.get<Lid>(url).pipe(
        tap(_ => console.log(`fetched lid id=${id}`)),
        catchError(this.handleError<Lid>(`findById id=${id}`))
    );
  }
 
    // POST
    addLid (lid: Lid): Observable<Lid> {
      return this.httpClient.post<Lid>(this.ledenUrl, lid, httpOptions)
      .pipe(
          tap((lid: Lid) => console.log(`added lid w/ id=${lid.id}`)),
          catchError(this.handleError<Lid>('addLid'))
      );
    }
   
    // DELETE
    deleteLid (id: number): Observable<{}> {
      const url = `${this.ledenUrl}/${id}`; // DELETE api/leden/42
      return this.httpClient.delete(url, httpOptions)
        // .pipe(
        //   tap(),
        //   catchError(this.handleError('verwijderd fout'))
        // );
    }

      // PUT
    updateLid (lid: Lid): Observable<any> {
      return this.httpClient.put(this.ledenUrl, lid, httpOptions)
        .pipe(
          tap(_ => console.log(`updated lid  id=${lid.id}`)),
          catchError(this.handleError<any>('updateLid'))
         );
    }
   
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
   
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    

}
